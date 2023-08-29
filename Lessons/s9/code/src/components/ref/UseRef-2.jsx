import { useRef } from "react";

function ExUseRef2() {
  const InputValue = useRef(null);

  return (
    <>
      <input placeholder="Todo list" ref={InputValue} />
      <button
        onClick={() => {
          console.log(InputValue.current.value);
          InputValue.current.focus();
          InputValue.current.value = "";
        }}
      >
        Check
      </button>
    </>
  );
}

export default ExUseRef2;
