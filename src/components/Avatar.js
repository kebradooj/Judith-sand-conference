import React from "react";

const Avatar = ({ speakerImage }) => {
  return (
    <div>
      <img src={speakerImage} alt="..." style={{ width: "10rem" }} />
    </div>
  );
};

export default Avatar;
