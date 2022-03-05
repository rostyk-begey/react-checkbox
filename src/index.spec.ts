import { act, renderHook } from '@testing-library/react-hooks';
import { useCheckbox } from './';
import { getOptionsIds } from './utils';

const optionWithChildren = {
  id: 3,
  title: 'Option 4',
  options: [
    { id: 30, title: 'Option 4.1' },
    { id: 31, title: 'Option 4.2' },
    { id: 32, title: 'Option 4.3' },
    {
      id: 33,
      title: 'Option 4.4',
      options: [
        { id: 330, title: 'Option 4.4.1' },
        { id: 331, title: 'Option 4.4.2' },
        { id: 332, title: 'Option 4.4.3' },
        {
          id: 333,
          title: 'Option 4.4.4',
          options: [
            { id: 3330, title: 'Option 4.4.4.1' },
            { id: 3331, title: 'Option 4.4.4.2' },
            { id: 3332, title: 'Option 4.4.4.3' },
            { id: 3333, title: 'Option 4.4.4.4' },
          ],
        },
      ],
    },
  ],
};
const options = [
  {
    id: -1,
    title: 'All',
    options: [
      { id: 0, title: 'Option 1' },
      { id: 1, title: 'Option 2' },
      { id: 2, title: 'Option 3' },
      optionWithChildren,
    ],
  },
];
const optionsIds = getOptionsIds(options);

describe('useCheckbox', () => {
  it('select option', () => {
    const [allOption] = options;
    const [option] = allOption.options;

    const { result } = renderHook(() => useCheckbox({ options }));

    expect(result.current.selectedOptions).toHaveLength(0);

    act(() => {
      result.current.handleOptionChange(option, true);
    });

    expect(result.current.selectedOptions).toEqual([option.id]);
    expect(result.current.indeterminateOptions).toEqual([allOption.id]);
  });

  it('unselect option', () => {
    const [allOption] = options;
    const [option] = allOption.options;
    const defaultSelectedOptions = [option.id];

    const { result } = renderHook(() =>
      useCheckbox({ options, defaultSelectedOptions }),
    );

    expect(result.current.selectedOptions).toEqual([option.id]);
    expect(result.current.indeterminateOptions).toEqual([allOption.id]);

    act(() => {
      result.current.handleOptionChange(option, false);
    });

    expect(result.current.selectedOptions).toHaveLength(0);
    expect(result.current.indeterminateOptions).toEqual([]);
  });

  it('select option with children', () => {
    const [allOption] = options;
    const optionsIds = getOptionsIds([optionWithChildren]);
    const { result } = renderHook(() => useCheckbox({ options }));

    expect(result.current.selectedOptions).toHaveLength(0);
    expect(result.current.indeterminateOptions).toEqual([]);

    act(() => {
      result.current.handleOptionChange(optionWithChildren, true);
    });

    expect(expect.arrayContaining(result.current.selectedOptions)).toEqual(
      optionsIds,
    );
    expect(result.current.indeterminateOptions).toEqual([allOption.id]);
  });

  it('unselect option with children', () => {
    const [allOption] = options;
    const optionsIds = getOptionsIds([optionWithChildren]);
    const { result } = renderHook(() =>
      useCheckbox({ options, defaultSelectedOptions: optionsIds }),
    );

    expect(expect.arrayContaining(result.current.selectedOptions)).toEqual(
      optionsIds,
    );
    expect(result.current.indeterminateOptions).toEqual([allOption.id]);

    act(() => {
      result.current.handleOptionChange(optionWithChildren, false);
    });

    expect(result.current.selectedOptions).toHaveLength(0);
    expect(result.current.indeterminateOptions).toEqual([]);
  });

  it('select all option', () => {
    const [allOption] = options;

    const { result } = renderHook(() => useCheckbox({ options }));

    expect(result.current.selectedOptions).toHaveLength(0);
    expect(result.current.indeterminateOptions).toEqual([]);

    act(() => {
      result.current.handleOptionChange(allOption, true);
    });

    expect(expect.arrayContaining(result.current.selectedOptions)).toEqual(
      optionsIds,
    );
    expect(result.current.indeterminateOptions).toEqual([]);
  });

  it('unselect all option', () => {
    const [allOption] = options;
    const defaultSelectedOptions = optionsIds;

    const { result } = renderHook(() =>
      useCheckbox({ options, defaultSelectedOptions }),
    );

    expect(result.current.selectedOptions).toEqual(
      expect.arrayContaining(optionsIds),
    );
    expect(result.current.indeterminateOptions).toEqual([]);

    act(() => {
      result.current.handleOptionChange(allOption, false);
    });

    expect(result.current.selectedOptions).toHaveLength(0);
    expect(result.current.indeterminateOptions).toEqual([]);
  });
});
