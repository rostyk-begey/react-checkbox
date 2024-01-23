import './App.css';
import Checkbox from './Checkbox.tsx';
import { useCheckbox } from '../../src';

type Option = { id: number; title: string; options?: Option[] };

const options: Option[] = [
  {
    id: -1,
    title: 'All',
    options: [
      { id: 1, title: 'Option 1' },
      { id: 2, title: 'Option 2' },
      { id: 3, title: 'Option 3' },
      {
        id: 4,
        title: 'Option 4',
        options: [
          { id: 41, title: 'Option 4.1' },
          { id: 42, title: 'Option 4.2' },
          { id: 43, title: 'Option 4.3' },
          {
            id: 44,
            title: 'Option 4.4',
            options: [
              { id: 441, title: 'Option 4.4.1' },
              { id: 442, title: 'Option 4.4.2' },
              { id: 443, title: 'Option 4.4.3' },
              {
                id: 444,
                title: 'Option 4.4.4',
                options: [
                  { id: 4441, title: 'Option 4.4.4.1' },
                  { id: 4442, title: 'Option 4.4.4.2' },
                  { id: 4443, title: 'Option 4.4.4.3' },
                  { id: 4444, title: 'Option 4.4.4.4' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const defaultSelectedOptions = [444, 4441, 4442, 4443];

function App() {
  const { selectedOptions, indeterminateOptions, handleOptionChange } =
    useCheckbox({
      options,
      defaultSelectedOptions,
    });

  const renderOptions = (options: Option[]) =>
    options.map((option) => (
      <ul key={option.id}>
        <Checkbox
          checked={selectedOptions.includes(option.id)}
          indeterminate={indeterminateOptions.includes(option.id)}
          onChange={(e) => handleOptionChange(option, e.target.checked)}
        >
          {option.title}
        </Checkbox>
        {option.options && <li>{renderOptions(option.options)}</li>}
      </ul>
    ));

  return (
    <div className="example">
      <div>
        <h2>
          <code>useCheckbox</code>
        </h2>
        {renderOptions(options)}
      </div>
      <div>
        <h2>Selected ids</h2>
        <code>
          <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
        </code>
      </div>
    </div>
  );
}

export default App;
