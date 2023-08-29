import { useEffect, useLayoutEffect, useReducer, useRef } from "react";

function ExLayoutEffect() {
  const InputValueRef = useRef(null);

  useLayoutEffect(() => {
    console.log("Hello ", InputValueRef.current.value);
  }, []);

  useEffect(() => {
    console.log("Hi");
    InputValueRef.current.value = "Parna";
  }, []);

  return (
    <>
      <h1>Use layout</h1>
      <input value="ACM" ref={InputValueRef} />
    </>
  );
}

export default ExLayoutEffect;
