import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 50) {
      console.log('Value after Addition :: ', counter + 1);
      setCounter(counter + 1);
    } else {
      console.log('Maximum limit reached (50)');
    }
  };

  const subtractValue = () => {
    if (counter > 0) {
      console.log('Value after Subtraction :: ', counter - 1);
      setCounter(counter - 1);
    } else {
      console.log('Minimum limit reached (0)');
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value :: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  );
}

export default App;
