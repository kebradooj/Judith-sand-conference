import React from "react";

const UnrealEngine4 = ({ data }) => {
  return (
    <div>
      <img src={data.events[3].ue4.image} alt="" />
      <h2>{data.events[3].ue4.title}</h2>
      <p>{data.events[3].ue4.description}</p>
    </div>
  );
};

export default UnrealEngine4;
