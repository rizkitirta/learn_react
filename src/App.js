import React, { Component, useState } from "react";

function App() {
  const [firts_name, setFirts_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName(`${firts_name} ${last_name}`);

    setFirts_name("");
    setLast_name("");
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn React Function</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-2">
                    <label className="form-label" htmlFor="first_name">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="form-control"
                      value={firts_name}
                      onChange={(e) => setFirts_name(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label" htmlFor="last_name">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="form-control"
                      value={last_name}
                      onChange={(e) => setLast_name(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="card-footer">
                My Name Is {name ? name : "..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
