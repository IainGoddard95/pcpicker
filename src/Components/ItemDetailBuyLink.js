import React from "react";

const ItemDetailBuyLink = (props) => {

  return (
    <span>
      <a href={props.url} target="_blank">Click here to view on Amazon</a>
    </span>
  );
};

export default ItemDetailBuyLink;