import axios from "axios";
import { useEffect, useState } from "react";

function AxiosPage() {
  const [state, setState] = useState({ title: "" });

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((res) => res.json())
    //   .then(setState)
    //   .catch(console.warn);
    // todo
    // introduce AXIOS
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => setState(res.data))
      .catch(console.log);
  }, []);
  return <div>{state.title}</div>;
}

export default AxiosPage;
