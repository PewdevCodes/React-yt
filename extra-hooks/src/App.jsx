import React from 'react'
import { useState } from 'react';

const App = () => {
  // 1ST WAY TO USE useState HOOK
  // const [brand , setBrand] = useState("Ferrari");
  // const [model , setModel] = useState("Roma");
  // const [year , setYear] = useState(2023);
  // const [color , setColor] = useState("red");

  // 2ND WAY TO USE useState HOOK
  //   const [car, setCar] = useState({
  //     brand: "Ferrari",
  //     model: "Roma",
  //     year: 2023,
  //     color: "red"
  //   });
  //   const changeState = () => {
  //   setCar((prevState) => {
  //     return { ...prevState, color: "blue" };
  //   });
  // };
  const [num, setNum] = useState(0);
  const IncreaseNum = () => {
    setNum(num + 1);
  }
  const DecreaseNum = () => {
    setNum(num - 1);
  }

  return (
    <div>
      <h1> COUNT :: {num} </h1>
      <button onClick={IncreaseNum}>  !! Whoop !!  </button>
      <br />
      <button onClick={DecreaseNum}>   !! Wham !! </button>
    </div>
  )
}

export default App
