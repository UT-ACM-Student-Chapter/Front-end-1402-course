import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import UserCard from "../../components/UserCard/UserCard";
import { useEffect, useState } from "react";
import axios from "axios";

function UserPage() {
  const [data, setData] = useState();
  console.log("🚀 ~ file: User.jsx:9 ~ UserPage ~ data:", data);
  // const params = useParams();

  function getUserFromServer() {
    // todo
    // implement fetch:  https://randomuser.me/api/
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setData(res.data.results[0]));
  }

  useEffect(getUserFromServer, []);
  // todo
  // show the first user when component rendered

  if (!data) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div>
      <UserCard {...data} />
      <button onClick={getUserFromServer}>Another user</button>
    </div>
  );
}

export default UserPage;
