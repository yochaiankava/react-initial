import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");

  function clear() {
    setResult(0);
  }

  return (
    <>
      <div>Calculator</div>     
      Num1: <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br />
      Num2: <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br />
      <br />
      {/* Arrow function examples */}
      <button className="btn btn-info" onClick={() => setResult(parseFloat(num1) + parseFloat(num2))}>
        +
      </button>
      <button className="btn btn-success" onClick={() => setResult(parseFloat(num1) - parseFloat(num2))}>
        -
      </button>
      <button className="btn btn-warning" onClick={() => setResult(parseFloat(num1) * parseFloat(num2))}>
        *
      </button>
      <button className="btn btn-primary" onClick={() => {
        if (parseFloat(num2) !== 0) {
          setResult(parseFloat(num1) / parseFloat(num2));
        } else {
          alert("Division by zero is not allowed.");
        }
      }}>
        /
      </button>
      <button className="btn btn-danger" onClick={clear}>
        Clear
      </button>
      <div>Result: {result}</div>
    </>
  );
}

export default Calculator;




// function Calculator() {
//   const [equation, setEquation] = useState("");
//   const [result, setResult] = useState(0);

//   function calculate() {
//     try {
//       setResult(eval(equation));
//     } catch (error) {
//       setResult("Error");
//     }
//   }

//   function clear() {
//     setEquation("");
//     setResult(0);
//   }

//   return (
//     <>
//       <input
//         type="text"
//         value={equation}
//         onChange={(e) => setEquation(e.target.value)}
//         placeholder="Enter an equation"
//       />
//       <br />
//       <button className="btn btn-primary" onClick={calculate}>
//         Calculate
//       </button>
//       <button className="btn btn-danger" onClick={clear}>
//         Clear
//       </button>
//       <div>Result: {result}</div>
//     </>
//   );
// }

// export default Calculator;
