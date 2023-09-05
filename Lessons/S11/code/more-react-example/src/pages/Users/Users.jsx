import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import UserCard from "../../components/UserCard/UserCard";

function UsersPage() {
  const [data, setData] = useState();

  function getUserFromServer() {
    // todo
    // implement fetch:  https://randomuser.me/api/?results=50
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.warn(err));
  }

  useEffect(() => {
    getUserFromServer();
  }, []);

  if (!data) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div>
      {data.map((item, key) => (
        <span key={key}>
          <UserCard {...item} />
        </span>
      ))}
    </div>
  );
}

export default UsersPage;
