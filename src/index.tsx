import { useState, useCallback, useEffect, useRef } from 'react';
import { CheckboxOption, CheckboxOptionId, UseCheckbox } from './types';
import {
  toggleOption,
  toggleParentOptions,
  toggleChildrenOptions,
} from './utils';

export const useCheckbox: UseCheckbox = ({
  options,
  defaultSelectedOptions = [],
}) => {
  const _defaultSelectedOptions = useRef(defaultSelectedOptions);
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionId[]>(
    [],
  );
  const [indeterminateOptions, setIndeterminateOptions] = useState<
    CheckboxOptionId[]
  >([]);

  useEffect(() => {
    const {
      selectedOptions: newSelectedOptions,
      indeterminateOptions: newIndeterminateOptions,
    } = toggleParentOptions(defaultSelectedOptions, options);

    setSelectedOptions(newSelectedOptions);
    setIndeterminateOptions(newIndeterminateOptions);

    _defaultSelectedOptions.current = defaultSelectedOptions;
  }, [defaultSelectedOptions === _defaultSelectedOptions.current]);

  const handleOptionChange = useCallback(
    (option: CheckboxOption, checked: boolean) => {
      let indeterminateOptions: CheckboxOptionId[] = [];
      let newSelectedOptions = selectedOptions;

      newSelectedOptions = toggleOption(newSelectedOptions, option, checked);
      newSelectedOptions = toggleChildrenOptions(
        newSelectedOptions,
        option,
        checked,
      );
      ({ selectedOptions: newSelectedOptions, indeterminateOptions } =
        toggleParentOptions(newSelectedOptions, options));

      setSelectedOptions(newSelectedOptions);
      setIndeterminateOptions(indeterminateOptions);
    },
    [options, selectedOptions],
  );

  return {
    selectedOptions,
    indeterminateOptions,
    handleOptionChange,
  };
};

export * from './types';
