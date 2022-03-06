export type CheckboxOptionId = number;

export type CheckboxOption<T extends CheckboxOptionId = CheckboxOptionId> = {
  id: T;
  options?: CheckboxOption<T>[];
} & Record<string | number | symbol, unknown>;

export type HandleOptionChange<T extends CheckboxOptionId = CheckboxOptionId> =
  (options: CheckboxOption<T>, checked: boolean) => void;

export type UseCheckboxProps<T extends CheckboxOptionId = CheckboxOptionId> = {
  allOptionId?: T;
  options: CheckboxOption<T>[];
  defaultSelectedOptions?: T[];
};

export type UseCheckboxValue<T extends CheckboxOptionId = CheckboxOptionId> = {
  selectedOptions: CheckboxOptionId[];
  indeterminateOptions: CheckboxOptionId[];
  handleOptionChange: HandleOptionChange<T>;
};

export type UseCheckbox<T extends CheckboxOptionId = CheckboxOptionId> = (
  props: UseCheckboxProps<T>,
) => UseCheckboxValue<T>;
