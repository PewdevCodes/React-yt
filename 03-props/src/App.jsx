import React, { useState } from 'react';
import Card from './components/CArd';

const App = () => {
  const [num, setNum] = useState(0);

  const btnClicked = () => {
    setNum(num + 1);
    console.log('Button Clicked :: ', num);
  };

  return (
    <div className="parent">
      <Card
        user="Joey"
        age={18}
        img="https://i.pinimg.com/736x/61/74/50/6174508226d566658b6495de1011545f.jpg"
      />
      <Card
        user="Chandler"
        age={20}
        img="https://i.pinimg.com/1200x/93/a3/73/93a37318df208b09af2fd0e08f70cb43.jpg"
      />
      <Card
        user="Ross"
        age={22}
        img="https://i.pinimg.com/736x/6e/c5/c4/6ec5c45dfbeb4dc0c1e9adf3963d2f83.jpg"
      />
      <Card
        user="Monica"
        age={21}
        img="https://i.pinimg.com/736x/79/52/3c/79523c1443fa66c965c5a8f9c3195cbf.jpg"
      />
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  );
};

export default App;
