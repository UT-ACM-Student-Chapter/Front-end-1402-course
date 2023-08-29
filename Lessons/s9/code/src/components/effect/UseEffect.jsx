import { useEffect } from "react";

function ExUseEffect(props) {
  useEffect(() => {
    console.log("Hi");
  }, []);

  useEffect(() => {
    console.log(props);
  }, [props.number2, props.number]);
  
  return (
    <>
      <h1>Hello! {2}</h1>
    </>
  );
}

export default ExUseEffect;
