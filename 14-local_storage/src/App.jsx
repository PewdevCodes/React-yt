import React from 'react'

const App = () => {

  const user = { 
    name: 'Jane Smith',
    age: 25,
    city: 'New York'
  }

  localStorage.setItem('user', JSON.stringify(user));

  const storedUser = JSON.parse(localStorage.getItem('user'));
  console.log(storedUser); // Output: { name: 'Jane Smith', age: 25, city: 'New York' }

  // localStorage.clear();
  // sessionStorage.clear();
  localStorage.setItem('name', 'John Doe');
  localStorage.setItem('age', '30');
  const name = localStorage.getItem('name');
  console.log(name); // Output: John Doe

  localStorage.removeItem('age');
  const age = localStorage.getItem('age');
  console.log(age); // Output: null


  return (
    <div>
      
    </div>
  )
}

export default App
