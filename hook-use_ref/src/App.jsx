import React from 'react'
import { useRef } from 'react'


// Use ref hook --> accessing DOM elements directly 
// it dont rerender the component when the value changes
const App = () => {

  // const [value , setValue] = useState(0)

  // const count = useRef(0)

  // useEffect(() => {
  //   count.current = count.current + 1
  //   console.log('Render Count :' , count.current);
  // }, [value])
  
  const inputElement = useRef()



  return (
    <div>

      {/* <button onClick={ () => { 
        setValue(prev => prev + 1)
      }}>add</button>
      <h1>{value}</h1>
      <button onClick={ () => { 
        setValue(prev => prev - 1)
      }}>subtract</button>
      <h1>Render Count :: {count.current}</h1> */}

      <input type="text" ref={inputElement} />
      <button onClick={() => {
        console.log(inputElement.current.value);
      }}>Submit</button>
    </div>
  )
}

export default App
