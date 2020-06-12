import React from "react";

const UnityGameDev = ({ data }) => {
  return (
    <div className="container py-5">
      <img
        src={data.events[2].unity.image}
        alt=""
        style={{ width: "9.125rem" }}
      />
      <h2>{data.events[2].unity.title}</h2>
      <p>{data.events[2].unity.description}</p>
    </div>
  );
};

export default UnityGameDev;
