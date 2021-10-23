import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Show(props) {
  const [user, setUser] = useState([]);
  const identifier = useParams();

  const getUser = async () => {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier.id}`
      );
      setUser(response.data);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [identifier.id]);

  return (
    <div className="container card">
      <div className="">{user.name}</div>
      <div className="">{user.username}</div>
      <div className="">{user.email}</div>
      <div className="">{user.phone}</div>
      <div className="">{user.website}</div>
    </div>
  );
}

export default Show;
