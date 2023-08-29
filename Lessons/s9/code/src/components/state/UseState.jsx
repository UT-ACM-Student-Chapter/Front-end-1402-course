import { useState } from "react";

function ExUseState() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  function increase() {
    // counter += 1;
    setCounter((counter) => {
      return counter + 1;
    });
    console.log(counter);
  }
  return (
    <>
      <p>{counter}</p>
      <button onClick={increase}>+</button>
    </>
  );
}

export default ExUseState;
