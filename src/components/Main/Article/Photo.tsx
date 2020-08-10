import React from "react";
import "./Photo.css";

//interface PhotoProps
export interface PhotoProps {
  actualItem: any;
}

//component
const Photo: React.SFC<PhotoProps> = props => {
  //destructuring props
  const { actualItem } = props;

  //template
  return (
    <div>
      <img src={actualItem.url} alt={actualItem.title} />
      <p>code: {actualItem.code}</p>
    </div>
  );
};

export default Photo;
