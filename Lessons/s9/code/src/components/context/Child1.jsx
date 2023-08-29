import { useContext, useState } from "react";
import { UserContext } from "./UseContext";

function ExUseContextChild1() {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <>
      <h1>Say your name!</h1>
      <input
        placeholder="name"
        value={value.name}
        onChange={(e) => value.onChange(e.target.value)}
      />
    </>
  );
}

export default ExUseContextChild1;
