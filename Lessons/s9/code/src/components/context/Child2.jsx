import { useContext } from "react";
import { UserContext } from "./UseContext";

function ExUseContextChild2() {
  const { name } = useContext(UserContext);
  return (
    <>
      <h1>Hello! {name} </h1>
    </>
  );
}

export default ExUseContextChild2;
