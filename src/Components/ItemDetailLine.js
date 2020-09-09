import React from "react";

const ItemDetailLine = (props) => {

  return (
    <div>
        <p>{props.label}: {props.value}</p>
    </div>
  );
};

export default ItemDetailLine;