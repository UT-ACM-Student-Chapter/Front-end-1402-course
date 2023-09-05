// import { useState } from "react";
import useCounter from "../../utility/useCounter";

function CustomHookPage() {
  // todo
  // just need the logic to be reusable.
  // const counterSet = useCounter();
  const [counter, Increase, ChangeCounter, Reset, Decrease] = useCounter();

  return (
    <center>
      <h1>React Counter Custom Hook</h1>
      <div>
        <button onClick={Decrease}>DECREASE</button>
        <input
          type="number"
          value={counter}
          onChange={(e) => ChangeCounter(e.target.value)}
        />
        <button onClick={Increase}>INCREASE</button>
      </div>
      <button onClick={Reset}>RESET</button>
    </center>
  );
}

export default CustomHookPage;
