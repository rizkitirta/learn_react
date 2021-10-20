import React from "react";

function Card(props) {
  console.log(props);
  const post = props.post;
  return (
    <div className="card">
      <img src={post.imageUrl} alt="" className="card-img-top" />
      <div className="card-body">
        <h4>{post.title}</h4>
        <small className="text-muted">{post.published}</small>
      </div>
    </div>
  );
}

export default Card;
