import React from "react";

const Item = (props) => {

  return (
    <button onClick={() => props.configurationHandler(props.componentType, props.item)} disabled={props.disabled} >
      {props.item.name}
    </button>
  );
};

export default Item;
