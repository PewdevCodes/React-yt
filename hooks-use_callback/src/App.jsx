import React from 'react'
import { useCallback , useState } from 'react'
import Header from './components/header'
const App = () => {

  const [count, setCount] = useState(0) 

  const newFn = useCallback((count) => { } , [] ) 

  return (
    <div>
      <Header newFn = {newFn}  />
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(prev => prev + 1) }>Increment</button>
    </div>
  )
}

export default App
