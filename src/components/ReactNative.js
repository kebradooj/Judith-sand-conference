import React from "react";

const ReactNative = ({ data }) => {
  return (
    <div className="container py-5">
      <img
        src={data.events[1].reactnative.image}
        alt=""
        style={{ width: "9.125rem" }}
      />
      <h2>{data.events[1].reactnative.title}</h2>
      <p>{data.events[1].reactnative.description}</p>
    </div>
  );
};

export default ReactNative;
