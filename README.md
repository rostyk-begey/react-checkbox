# react-checkbox-hook

[![NPM](https://img.shields.io/npm/v/react-checkbox-hook.svg)](https://www.npmjs.com/package/react-checkbox-hook)
[![CI](https://github.com/rostyk-begey/react-checkbox-hook/actions/workflows/ci.yml/badge.svg)](https://github.com/neet/react-checkbox-hook/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/neet/react-checkbox-hook/branch/main/graph/badge.svg?token=TH4BNCOPMB)](https://codecov.io/gh/neet/react-checkbox-hook)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> 
> A React hook to easily work with checkboxes


<p align="center">
  <a href="https://github.com/rostyk-begey/react-checkbox-hook/tree/master/example">Example</a> |
  <a href="https://rostyk-begey.github.io/react-checkbox-hook/">Demo</a>
</p>

### Features

- Controllable API
- Headless (Bring-your-own-UI)
- Checkboxes nesting
- Support of indeterminate checkboxes
- [Small size](https://bundlephobia.com/result?p=react-checkbox-hook@latest) and no [dependencies](./package.json)


## Install

```bash
yarn add react-checkbox-hook
```

```bash
npm install --save react-checkbox-hook
```

## Quickstart

Learn more in [example](https://github.com/rostyk-begey/react-checkbox-hook/tree/master/example)

```tsx
import React from 'react';
import { useCheckbox } from 'react-checkbox-hook';

const App = () => {
  const options = [
    { id: 0, title: 'Option 1' },
    { id: 1, title: 'Option 2' },
    { id: 2, title: 'Option 3' },
  ];
  const { selectedOptions, handleOptionChange } = useCheckbox({ options });

  return (
    <div>
      {options.map((option) => (
        <div key={option.id}>
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.id)}
              onChange={(e) => handleOptionChange(option, e.target.checked)}
            />
            {option.title}
          </label>
          <br />
        </div>
      ))}
    </div>
  )
}
```

## License

MIT © [rostyk-begey](https://github.com/rostyk-begey)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
