import React from "react";

const Item = (props) => {

  return (
    <button onClick={() => props.selectionHandler(props.componentType, props.item)} disabled={props.disabled} >
      {props.item.name}
    </button>
  );
};

export default Item;
