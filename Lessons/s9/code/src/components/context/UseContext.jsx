import { createContext, useState } from "react";
import ExUseContextChild1 from "./Child1";
import ExUseContextChild2 from "./Child2";

export const UserContext = createContext({ name: "", onChange: () => {} });

function ExUseContext(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Use Context!</h1>
      <UserContext.Provider value={{ name: value, onChange: setValue }}>
        <ExUseContextChild1 />
        <ExUseContextChild2 />
      </UserContext.Provider>
    </>
  );
}

export default ExUseContext;
