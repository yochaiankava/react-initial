import React, { useState } from "react";



function Buttons() {
  const [counter, setCounter] = useState(0);
  // const [num1, setNum1] = useState("0")
  // const [num2, setNum2] = useState("0")


  // *** same as the errowes function 
  // function increase() {
  //   setCounter(counter + 1);
  // }  

  // function decrease() {
  //   setCounter(counter - 1);
  // }

  function clear() {
    setCounter(counter === 0);
  }

  return (
    <> 
      {/* Num1: <input  value={num1} onChange={(e) => setNum1(e.target.value)}/>
      <br/>
      Num2: <input  value={num2} onChange={(e) => setNum2(e.target.value)}/>
      <br/>
      <br/> */}
      {/*errow function example*/}
      <button className="btn btn-info" onClick={() => setCounter(counter + 1) }>+{" "}</button>
      <button className="btn btn-success" onClick={() => counter > 0 ? setCounter(counter - 1) : setCounter(0)}>-{" "}</button>
      <button className="btn btn-danger" onClick={clear}>Clear{" "}</button>
      <div>{counter}</div>
    </>
  );
}

export default Buttons;




