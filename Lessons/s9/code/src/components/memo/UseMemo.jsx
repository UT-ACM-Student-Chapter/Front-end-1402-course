import { useEffect, useMemo, useState } from "react";

function ExUseMemo(props) {
  const [names, setNames] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNames(["Harry", "Niall", "Zayn", "Louis", "Liam"]);
    }, 5000);
  }, []);

  function findTheLongestName(data) {
    console.log("Give me a Coin!");
    if (data.length > 0)
      return data.reduce(function (a, b) {
        return a.length > b.length ? a : b;
      });
  }

  const getLongestName = useMemo(() => findTheLongestName(names), [names]);

  return (
    <>
      <h1>Use Memo!</h1>
      <p>{getLongestName}</p>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "Happy" : "Sad"} Nothing!
      </button>
    </>
  );
}

export default ExUseMemo;
