import React from "react";
import NotFoundIMG from "../images/404.png";

const NotFoundPage = () => {
  return (
    <div
      className="container py-5 d-flex justify-content-center align-items-center"
      style={{ height: "78vh" }}
    >
      <h3>Sorry, We can't find what you looking for--__-- <br/>Maby you forgot something really right think?<br/> So remember it! <br/>Faster i'll wait you here</h3>
      <img
        src={NotFoundIMG}
        alt="404"
        style={{ width: "28rem", marginLeft: "1rem" }}
      />
    </div>
  );
};

export default NotFoundPage;
