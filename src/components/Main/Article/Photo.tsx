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
  if (actualItem) {
    return (
      <div className="photo">
        <h3>Obrázok</h3>
        <img src={actualItem.url} alt={actualItem.title} />
        <br />
        <span className="code">kód: {actualItem.code}</span>
      </div>
    );
  } else {
    return (
      <div className="photo">
        <h3>položka vymazaná</h3>
      </div>
    );
  }
};

export default Photo;
