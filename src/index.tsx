import { useReducer, useEffect, useRef } from 'react';
import {
  type CheckboxOption,
  type CheckboxOptionId,
  type UseCheckboxProps,
  type UseCheckboxValue,
} from './types';
import { initialState, reducer } from './state';

export const useCheckbox = <T extends CheckboxOptionId = CheckboxOptionId>({
  options,
  defaultSelectedOptions = [],
}: UseCheckboxProps<T>): UseCheckboxValue<T> => {
  const _defaultSelectedOptions = useRef(defaultSelectedOptions);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'SET_OPTIONS',
      payload: {
        options,
        defaultSelectedOptions,
      },
    });

    _defaultSelectedOptions.current = defaultSelectedOptions;
  }, [defaultSelectedOptions === _defaultSelectedOptions.current]);

  const handleOptionChange = (option: CheckboxOption, checked: boolean) => {
    dispatch({
      type: 'CHANGE_OPTION',
      payload: { option, options, checked },
    });
  };

  return {
    selectedOptions: state.selectedOptions,
    indeterminateOptions: state.indeterminateOptions,
    handleOptionChange,
  };
};

export * from './types';
