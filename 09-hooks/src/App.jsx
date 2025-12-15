import React from 'react'
import { useState } from 'react'

 const App = () => {

  const [count, setCount] = useState(10);
  const [username, setUsername] = useState("Joey");
  const [users, setUsers] = useState( [10 ,20 ,30 ,40 ,50 ]);

  return (
    <div>
      <h1>Value of number is :: {count}</h1>
      <br />
      <h1>Username is :: {username}</h1>
      <br />
      <h1>Users List :: {users.join(", ")}</h1>
      <br />
      <button 
      onClick={
        () => {
          setCount(count + 1)
          setUsername("Chandler")
          setUsers( [...users , 60 ] )
          }}>
        
        Click
        
      </button>
    </div>
  )
}

export default App
