import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { isDisplay: state.isDisplay, counter: state.counter + 1 };
    case "TOGGLE":
      return { counter: state.counter, isDisplay: !state.isDisplay };
    default:
      return state;
  }
};

function ExUseReducer() {
  // const [counter, setCounter] = useState(0);
  // const [isDisplay, setIsDisplay] = useState(true);
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    isDisplay: false,
  });
  return (
    <>
      <p>{state.counter}</p>
      <button
        onClick={() => {
          // setCounter(counter + 1);
          // setIsDisplay(!isDisplay);
          dispatch({ type: "TOGGLE" });
          dispatch({ type: "INCREASE" });
        }}
      >
        action
      </button>
      <>{state.isDisplay && <p>Hey!</p>}</>
    </>
  );
}

export default ExUseReducer;
