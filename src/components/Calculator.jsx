import React, { useState } from "react";

const Calculator = () => {
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);
  const [result, setResult] = useState(0);
  const handleFirstChange = (e) => {
    setFirstNo(e.target.value);
  };
  const handleSecondChange = (e) => {
    setSecondNo(e.target.value);
  };
  const handleAdd = () => {
    setResult(parseInt(firstNo) + parseInt(secondNo));
  };

  const handleSubtract = () => {
    setResult(parseInt(firstNo) - parseInt(secondNo));
  };
  const handleMultiply = () => {
    setResult(parseInt(firstNo) * parseInt(secondNo));
  };
  const handleDivide = () => {
    setResult(parseInt(firstNo) / parseInt(secondNo));
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="font-bold text-3xl">Hi, Durga Prasad</div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col">
            <label className="font-bold text-xl">Enter first number:</label>
            <input
              type="number"
              className="border border-black h-8 rounded-sm text-xl p-2"
              value={firstNo}
              onChange={handleFirstChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-xl">Enter second number:</label>
            <input
              type="number"
              className="border border-black h-8 rounded-sm text-xl p-2"
              value={secondNo}
              onChange={handleSecondChange}
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="mt-2">
            <button
              className="p-2 bg-blue-500 text-white font-bold w-20 rounded-md"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <div className="mt-2">
            <button
              className="p-2 bg-blue-500 text-white font-bold w-20 rounded-md"
              onClick={handleSubtract}
            >
              Subtract
            </button>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="mt-2">
            <button
              className="p-2 bg-blue-500 text-white font-bold w-20 rounded-md"
              onClick={handleMultiply}
            >
              Multiply
            </button>
          </div>
          <div className="mt-2">
            <button
              className="p-2 bg-blue-500 text-white font-bold w-20 rounded-md"
              onClick={handleDivide}
            >
              Divide
            </button>
          </div>
        </div>
        <div className="mt-2 font-bold text-3xl">The result is: {result}</div>
      </div>
    </>
  );
};

export default Calculator;
