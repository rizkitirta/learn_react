import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="container py-4">
      <h4>The Posts</h4>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <Card
            post={{
              imageUrl: "https://picsum.photos/200/200",
              title: "Fisrt post",
              published: "06 februari 2021",
            }}
          />
        </div>
        <div className="col-md-4">
          <Card
            post={{
              imageUrl: "https://picsum.photos/201/200",
              title: "Second post",
              published: "11 februari 2021",
            }}
          />
        </div>
        <div className="col-md-4">
          <Card
            post={{
              imageUrl: "https://picsum.photos/202/200",
              title: "Last post",
              published: "22 februari 2021",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
