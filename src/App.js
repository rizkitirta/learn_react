import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      name: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      name: `${this.state.firstName} ${this.state.lastName}`,
    });

    this.state.firstName = "";
    this.state.lastName = "";
  };

  render() {
    const { name } = this.state;
    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn React</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        onChange={this.changeHandler}
                        value={this.state.firstName}
                        name="firstName"
                        id="firstName"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        onChange={this.changeHandler}
                        value={this.state.lastName}
                        name="lastName"
                        id="lastName"
                        className="form-control"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-block"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="card-footer text-muted">
                  My Name Is {name ? name : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
