import { type CheckboxOption, type CheckboxOptionId } from './types';

export function arrayAdd<T>(array: T[], ...items: T[]) {
  return [...new Set([...array, ...items])];
}

export function arrayRemove<T>(array: T[], ...items: T[]) {
  const set = new Set(array);

  items.forEach((item) => {
    set.delete(item);
  });

  return [...set];
}

export const getOptionsIds = (
  options: CheckboxOption[],
): CheckboxOptionId[] => {
  return options.reduce(
    (acc: CheckboxOptionId[], { id, options: childrenOptions = [] }) => [
      ...acc,
      ...getOptionsIds(childrenOptions),
      id,
    ],
    [],
  );
};

export const getAllParentOptions = (
  options: CheckboxOption[],
): CheckboxOption[] => {
  return options.reduce((acc, option) => {
    if (option?.options && option?.options?.length > 0) {
      acc.unshift(option);
      acc.unshift(...getAllParentOptions(option.options));
    }

    return acc;
  }, [] as CheckboxOption[]);
};

export const toggleOption = (
  selectedOptions: CheckboxOptionId[],
  { id: optionId }: CheckboxOption,
  checked: boolean,
) => {
  return checked
    ? arrayAdd(selectedOptions, optionId)
    : arrayRemove(selectedOptions, optionId);
};

export const toggleChildrenOptions = (
  selectedOptions: CheckboxOptionId[],
  option: CheckboxOption,
  checked: boolean,
): CheckboxOptionId[] => {
  if (!option.options || option.options.length === 0) {
    return selectedOptions;
  }

  const childedOptions = getOptionsIds(option.options);

  return checked
    ? arrayAdd(selectedOptions, ...childedOptions)
    : arrayRemove(selectedOptions, ...childedOptions);
};

const getOptionState = (
  { options: childrenOptions }: CheckboxOption,
  selectedOptions: CheckboxOptionId[],
) => {
  const hasCheckedChildren = childrenOptions?.some(({ id }) =>
    selectedOptions.includes(id),
  );
  const hasUncheckedChildren = childrenOptions?.some(
    ({ id }) => !selectedOptions.includes(id),
  );

  return {
    isChecked: !hasUncheckedChildren,
    isIndeterminate: hasCheckedChildren && hasUncheckedChildren,
  };
};

export const toggleParentOptions = (
  selectedOptions: CheckboxOptionId[],
  options: CheckboxOption[],
): {
  selectedOptions: CheckboxOptionId[];
  indeterminateOptions: CheckboxOptionId[];
} => {
  return getAllParentOptions(options).reduce(
    (
      { selectedOptions: selected, indeterminateOptions: indeterminate },
      option,
    ) => {
      const { id: optionId } = option;
      const { isChecked, isIndeterminate } = getOptionState(option, selected);

      return {
        selectedOptions: isChecked
          ? arrayAdd(selected, optionId)
          : arrayRemove(selected, optionId),
        indeterminateOptions: isIndeterminate
          ? arrayAdd(indeterminate, optionId)
          : arrayRemove(indeterminate, optionId),
      };
    },
    { selectedOptions, indeterminateOptions: [] as CheckboxOptionId[] },
  );
};
