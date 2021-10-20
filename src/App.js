import axios from "axios";
import React, { useState, useEffect } from "react";

function App(props) {
  const [identifier, setIdentifier] = useState(1)
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)

  const getUser = async () => {
    setLoading(true)
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`
      );
      setUser(response.data);
      setLoading(false)
    } catch (e) {
      setLoading(true)
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <input type="text" name="identifier" className="form-control" value={identifier} onChange={(e) => setIdentifier(e.target.value)}/>
          {
            loading ? <div>loading..</div> :

            <table className="table table-striped table-hovered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {
                // users.map((user,index) => {
                //   return (
                //     <tr key={index}>
                //       <td>{user.name}</td>
                //       <td>{user.username}</td>
                //       <td>{user.email}</td>
                //       <td>{user.website}</td>
                //       <td>{user.phone}</td>
                //     </tr>
                //   )
                // })

                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                </tr>
              }
            </tbody>
          </table>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
