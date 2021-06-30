import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="Calculator">
      <Display />
      <Keypad />
    </div>
  );
};

export default Calculator;
