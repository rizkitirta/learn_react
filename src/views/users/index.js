import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setUsers(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => {
          return (
            <div className="col-md-3 m-3" key={user.id}>
              <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <p>{user.website}</p>
                  <NavLink
                    className="btn btn-outline-primary btn-rounded"
                    to={`user/${user.id}`}
                  >
                    View Profile
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
