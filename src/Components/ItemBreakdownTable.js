import React from "react";
import ItemDetailText from "./ItemDetailText";
import ItemDetailBuyLink from "./ItemDetailBuyLink";

const ItemBreakdownTable = (props) => {
  let alt = false;

  const listItemProperties = props.item
    ? Object.entries(props.item).map(([label, value]) => {
        alt = !alt;
        return label !== "url" ? (
          <ItemDetailText alt={alt ? "alt" : ""} label={label} value={value} />
        ) : (
          <ItemDetailBuyLink url={value} />
        );
      })
    : null;

  return (
    <div>
      <h1>INFO TABLE</h1>
      {props.item
        ? listItemProperties
        : "Click on an item to view some more details!"}
    </div>
  );
};

export default ItemBreakdownTable;
