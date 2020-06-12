import React from "react";

const UnrealEngine4 = ({ data }) => {
  return (
    <div className="container py-5">
      <img
        src={data.events[3].ue4.image}
        alt=""
        style={{ width: "9.125rem" }}
      />
      <h2>{data.events[3].ue4.title}</h2>
      <p>{data.events[3].ue4.description}</p>
    </div>
  );
};

export default UnrealEngine4;
