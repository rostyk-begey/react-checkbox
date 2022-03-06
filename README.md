# react-checkbox-hook

[![NPM](https://img.shields.io/npm/v/react-checkbox-hook.svg)](https://www.npmjs.com/package/react-checkbox-hook)
[![CI](https://github.com/rostyk-begey/react-checkbox-hook/actions/workflows/ci.yml/badge.svg)](https://github.com/neet/react-checkbox-hook/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/neet/react-checkbox-hook/branch/main/graph/badge.svg?token=TH4BNCOPMB)](https://codecov.io/gh/neet/react-checkbox-hook)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A React hook to easily work with checkboxes

## Install

```bash
yarn add react-checkbox-hook
```

```bash
npm install --save react-checkbox-hook
```

## Usage

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
