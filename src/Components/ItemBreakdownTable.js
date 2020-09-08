import React from "react";

const ItemBreakdownTable = (props) => {

  // const listItemProperties = item ?
  //   item.map(key => {return(
  //     <p>{key}</p>
  //   )}) : null

  function listItemProperties(obj) {
    Object.keys(obj).map((item, i) => {
      return(
      //console.log("listItemBreakdown ", item, i)
      <p>{item}</p>
      )
    })
  };

  return (
    <div>
      <h1>INFO TABLE</h1>
      {/* {props.item ? listItemProperties(props.item) : "Click on an item to see more details"} */}
      {listItemProperties(props.item)}
    </div>
  );
};

export default ItemBreakdownTable;
