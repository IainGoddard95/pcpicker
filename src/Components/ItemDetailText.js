import React from "react";

const ItemDetailText = (props) => {

  return (
    <div>
        <p>{(props.label.toUpperCase())}: {props.value}</p>
        
    </div>
  );
};

export default ItemDetailText;