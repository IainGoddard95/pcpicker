import React from "react";
import Item from "./Item";




const ItemList = (props) => {

  function compatibilityCheck(currentSpecs, componentType, item) {
    let disabled = false;

    switch(componentType) {
      case "cpu":
        if(item.cpuSocketType === currentSpecs.cpuSocketType || currentSpecs.cpuSocketType === null) {
           disabled = false;
           console.log(disabled, item.cpuSocketType, currentSpecs.cpuSocketType);
        } else {
           disabled = true;
          console.log(disabled, item.cpuSocketType, currentSpecs.cpuSocketType);
        }
        break;
    
   };
    
  return <Item key={item.name} componentType={props.name} item={item} disabled={disabled} selectionHandler={props.selectionHandler} />
        
}


  const listItems = props.items.map(item => (
    compatibilityCheck(props.currentSpecs, props.name, item)
  ));

  return (
    <div>
      <h1>{props.name}</h1>
      {listItems}
    </div>
  );
};

export default ItemList;
