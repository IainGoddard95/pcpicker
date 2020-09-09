import React from "react";
import ItemDetailLine from './ItemDetailLine';

const ItemBreakdownTable = (props) => {

  const listItemProperties = props.item ? Object.entries(props.item).map(([label, value]) => {
        return(
          <ItemDetailLine label={label} value={value}/>
        );
  }) : "null";
  

  return (
    <div>
      <h1>INFO TABLE</h1>
      {props.item ? listItemProperties : "Click on an item to view some more details!"}
    </div>
  );
};

export default ItemBreakdownTable;