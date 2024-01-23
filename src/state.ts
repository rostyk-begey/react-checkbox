import type { CheckboxOption, CheckboxOptionId } from './types';
import {
  toggleChildrenOptions,
  toggleOption,
  toggleParentOptions,
} from './utils';

type State = {
  selectedOptions: CheckboxOptionId[];
  indeterminateOptions: CheckboxOptionId[];
};

type Action =
  | {
      type: 'SET_OPTIONS';
      payload: {
        options: CheckboxOption[];
        defaultSelectedOptions: CheckboxOptionId[];
      };
    }
  | {
      type: 'CHANGE_OPTION';
      payload: {
        option: CheckboxOption;
        options: CheckboxOption[];
        checked: boolean;
      };
    };

export const initialState: State = {
  selectedOptions: [],
  indeterminateOptions: [],
};

export const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'SET_OPTIONS':
      return toggleParentOptions(
        payload.defaultSelectedOptions,
        payload.options,
      );
    case 'CHANGE_OPTION': {
      let { selectedOptions, indeterminateOptions } = state;
      const { option, options, checked } = payload;

      selectedOptions = toggleOption(selectedOptions, option, checked);
      selectedOptions = toggleChildrenOptions(selectedOptions, option, checked);
      ({ selectedOptions, indeterminateOptions } = toggleParentOptions(
        selectedOptions,
        options,
      ));

      return {
        selectedOptions,
        indeterminateOptions,
      };
    }
    default:
      return state;
  }
};
