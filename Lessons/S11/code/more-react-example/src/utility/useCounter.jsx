// todo

import { useState } from "react";

// Implement Custom hook for Counter here
function useCounter() {
  const [counter, setCounter] = useState(0);

  function Increase() {
    setCounter((counter) => counter + 1);
  }
  function Decrease() {
    setCounter((counter) => counter - 1);
  }

  function ChangeCounter(number) {
    setCounter(Number(number));
  }

  function Reset() {
    setCounter(0);
  }

  return [
    counter,
    Increase,
    ChangeCounter,
    Reset,
    Decrease,
  ];
}

export default useCounter;
