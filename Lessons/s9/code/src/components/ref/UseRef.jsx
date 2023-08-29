import { useEffect, useRef, useState } from "react";

function ExUseRef() {
  const harry = useRef(null);
  function SayHi() {
    alert("Hi!!!");
  }

  // useEffect(() => {
  //   console.log(harry);
  // }, [harry]);

  function callSayHi() {
    console.log("Called");
    harry.current.click();
  }

  return (
    <>
      <button onClick={callSayHi}>Watermellon Suger</button>
      <button onClick={SayHi} ref={harry}>
        Hi!
      </button>
    </>
  );
}

export default ExUseRef;
