import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {
  //useStates to handle inputs
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(num1 + num2);

  //function to calculate Addition
  const calculateAddition = (e) => {
    e.preventDefault();
    setResult(parseFloat(num1) + parseFloat(num2));
  };
  return (
    <div className="App">
      <br></br>
      <h1>Addition of Two Numbers</h1>
      <form>
        <label>Number 1 </label>
        <input
          className="form-control"
          type="number"
          name="n1"
          id="n1"
          placeholder="Enter Number 1"
          onInput={(e) => {
            // const input = e.target;
            setNum1(e.target.value);
          }}
        />
        <br></br>

        <label>Number 2 </label>
        <input
          className="form-control"
          type="number"
          name="n2"
          id="n2"
          placeholder="Enter Number 2"
          onInput={(e) => {
            setNum2(e.target.value);
          }}
        />
        <br></br>

        <button className="btn btn-success" onClick={calculateAddition}>Addition</button>
      </form>

      <h1>Addition = {result}</h1>
    </div>
  );
}

export default Add;
