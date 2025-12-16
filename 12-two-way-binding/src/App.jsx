import React, { useState } from 'react'

const App = () => {

  const [text, setText] = useState('')

  const submitHandler = (e) => { 
    e.preventDefault();
    alert('Form Submitted')

    setText('') // to clear the input field after submission
  }


  return (
    <div>
      <form onSubmit={(e)=> { 
          submitHandler(e)
        }}>
        <input type="text" 
        placeholder='Enter your name'
        value={text}
        onChange ={(e) => { 
          console.log("writing . . . . ")
          setText(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
