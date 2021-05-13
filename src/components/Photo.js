import React from "react";

const Photo = (props) => {
    const { photoUrl } = props
  return (
    <img
        alt='NASA Image of the Day'
        src={photoUrl}
    />
  );
};

export default Photo;
