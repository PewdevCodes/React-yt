import React from 'react'
import { useState } from 'react'

const App = () => {

// useState Hook works asynchronously 
// Hence, the updated value is not immediately available after calling the setter function.

  const [num , setNum] = useState({user: "Shantanu", age: 24})


  const btnClicked = () =>{
    // setNum(num + 1)
    // console.log("Button Clicked :: ", num)

    // Changing the state in different ways
    // 1) using destructiuring
    // const newNum = {...num};
    // newNum.user = "Pewdie"
    // newNum.age = 25
    // setNum(newNum);

    // 2) using previous state
    setNum((prev=>({...prev, user: "Pewdie", age: 25})))

  } 

  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App
