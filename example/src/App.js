import React from 'react'

import { useMyHook } from 'react-checkbox'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
