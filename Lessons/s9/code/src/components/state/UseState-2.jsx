import { useState } from "react";

function ExUseState2() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Type Anything..."
      />
      <p>{inputValue}</p>
    </>
  );
}

export default ExUseState2;
