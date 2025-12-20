import React, { useEffect } from 'react'
import { useState } from 'react';

const App = () => {

  const [count, setCount] =useState(0)
  // useEffect hook usage 

  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  } , [count]);
  
  // Empty dependency array to run only once on mount

  // empty array execute the callback only once when the component is mounted

  // if we add count in the dependency array, the callback will execute every time count changes

  return (
    <div>
      <h1>I've rendered {count} times</h1>
    </div>
  )
}

export default App
