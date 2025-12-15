import React from 'react'

const App = () => {

    // function greet() { 
    //   alert("Button is clicked !!! ")
    // }

    function mouseEnter() { 
      alert("Mouse Entered !!! ")
    }

  return (
    <div>
      <h1>Hello, React Functions!</h1>

      <button onMouseEnter={mouseEnter}>Click Me</button>

      <button onClick={
        function() { 
          alert("Button is clicked !!! ")
        }
      }>Don't Click Me</button>

      <button onMouseEnter={function() { 
        alert("Six Seven " + (6+7))
      }} >Dare , You Touch Me </button>

      <input onChange={function() { 
        console.log  ("User is typing !!! ")
      }} type="text" placeholder='Enter You Name' />
    </div>
  )
}

export default App
