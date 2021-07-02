import React, { useState, useEffect } from "react";
import Keys from "./Keys";
import "./Calculator.css";

function Calculator() {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue(0);
    setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-input">
        <div className="result">{nextValue} </div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          <Keys keyValue={"c"} onClick={handleOperation} />
          <Keys keyValue={"\xB1"} onClick={handleOperation} />
          <Keys keyValue={"%"} onClick={handleOperation} />
        </div>
        <div className="keys-operators">
          <Keys keyValue={"+"} onClick={handleOperation} />
          <Keys keyValue={"-"} onClick={handleOperation} />
          <Keys keyValue={"*"} onClick={handleOperation} />
          <Keys keyValue={"/"} onClick={handleOperation} />
          <Keys keyValue={"="} onClick={handleOperation} />
        </div>
        <div className="keys-numbers">
          <Keys keyValue={9} onClick={handleOperation} />
          <Keys keyValue={8} onClick={handleOperation} />
          <Keys keyValue={7} onClick={handleOperation} />
          <Keys keyValue={6} onClick={handleOperation} />
          <Keys keyValue={5} onClick={handleOperation} />
          <Keys keyValue={4} onClick={handleOperation} />
          <Keys keyValue={3} onClick={handleOperation} />
          <Keys keyValue={2} onClick={handleOperation} />
          <Keys keyValue={1} onClick={handleOperation} />
          <Keys className="key-dot" keyValue={"."} onClick={handleOperation} />
          <Keys className="key-zero" keyValue={0} onClick={handleOperation} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
