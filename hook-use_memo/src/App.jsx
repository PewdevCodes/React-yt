import React from 'react'
import { useState , useMemo } from 'react'

const App = () => {
  const [number , setNumber] = useState(0)
  const [counter , setCounter] = useState(0)

  function cubeNumber(num) { 
    console.log(`Calculation done ! `)
    return Math.pow(num , 3)
  }

  const result = useMemo( () => {
    return cubeNumber(number)
  } , [number] ) // Now as we have passed the depoendency array with number , the function will be called only when number changes

  return (
    <div>
      <input type="number" value={number} onChange={ (e)=> { setNumber(e.target.value) }}/>
      <h1>Cube of {number} is : {result} </h1>
     <button onClick={ () => setCounter(counter + 1)}> Counter </button>
      <h1>Counter value is : {counter} </h1>
    </div>
  )
}

export default App
