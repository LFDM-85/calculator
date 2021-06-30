import "./Keys.css";

const Keys = () => {
  const keys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
    "clear",
    "=",
  ];

  return keys.map((val) => {
    return <button>{val}</button>;
  });
};

export default Keys;
