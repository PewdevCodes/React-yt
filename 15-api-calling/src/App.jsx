import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  // async function getData() { 
    // await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
   // } Asychronous function using fetch API

   const getData = async () => { 
    await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
   }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(item) {
          return <p key={item.id}>{item.title}</p>
        })}
      </div>
    </div>
  )
}

export default App
