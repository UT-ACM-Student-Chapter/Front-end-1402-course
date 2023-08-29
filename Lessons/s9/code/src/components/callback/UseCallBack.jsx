import { useCallback } from "react";

function ExUseCallback(props) {
  const memoized = useCallback(
    () => {
      // the callback function to be memoized
    },
    // dependencies array
    []
  );
  return (
    <>
      <h1>Your turn!</h1>
      <h3>UseCallBack</h3>
    </>
  );
}

export default ExUseCallback;
