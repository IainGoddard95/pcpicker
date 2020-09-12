import React from "react";

const ItemDetailText = (props) => {
  return (
    <div className={"breakdown-line-text " + props.alt}>
      <span>{props.label.toUpperCase()}</span>
      <span>{props.value}</span>
    </div>
  );
};

export default ItemDetailText;
