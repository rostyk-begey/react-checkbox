# react-checkbox

[![NPM](https://img.shields.io/npm/v/react-checkbox.svg)](https://www.npmjs.com/package/react-checkbox)
[![CI](https://github.com/rostyk-begey/react-checkbox/actions/workflows/ci.yml/badge.svg)](https://github.com/neet/react-checkbox/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/neet/react-checkbox/branch/main/graph/badge.svg?token=TH4BNCOPMB)](https://codecov.io/gh/neet/react-checkbox)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A React hook to easily work with checkboxes

## Install

```bash
yarn add react-checkbox
```

```bash
npm install --save react-checkbox
```

## Usage

```tsx
import React from 'react';

import { useMyHook } from 'react-checkbox';

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
