import React from 'react';
import { useCheckbox } from 'react-checkbox-hook';

import Checkbox from './Checkbox';

const App = () => {
  const options = [
    {
      id: -1,
      title: 'All',
      options: [
        { id: 0, title: 'Option 1' },
        { id: 1, title: 'Option 2' },
        { id: 2, title: 'Option 3' },
        {
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
        },
      ],
    },
  ];
  const defaultSelectedOptions = [3330, 3331, 3332];

  const { selectedOptions, indeterminateOptions, handleOptionChange } =
    useCheckbox({
      options,
      defaultSelectedOptions,
    });

  const renderOptions = (options) =>
    options.map((option) => (
      <div key={option.id}>
        <Checkbox
          checked={selectedOptions.includes(option.id)}
          indeterminate={indeterminateOptions.includes(option.id)}
          onChange={(e) => handleOptionChange(option, e.target.checked)}
        >
          {option.title}
        </Checkbox>
        <br />
        {option.options?.length > 0 && renderOptions(option.options)}
      </div>
    ));

  return <div>{renderOptions(options)}</div>;
};

export default App;
