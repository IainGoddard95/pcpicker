import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  function compatibilityCheck(currentSpecs, currentSelection, componentType, item) {
    let disabled = true;
    let selected = false;

    switch (componentType) {
      case "case":
        if (
          item.formFactor === currentSpecs.formFactor ||
          currentSpecs.formFactor === null || item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }
        break;
      case "hardDrive":
        if(
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null)
          || 
          item.name === currentSelection[componentType].name
          ){
             disabled = false;
         }
         break;
      case "motherboard":
        if (
          ((item.cpuSocketType === currentSpecs.cpuSocketType || currentSpecs.cpuSocketType === null) 
            &&
          (item.formFactor === currentSpecs.formFactor || currentSpecs.formFactor === null) 
            &&
          (item.graphicsCardInterface === currentSpecs.graphicsCardInterface || currentSpecs.graphicsCardInterface === null)  
            &&
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null)
            &&
          (item.memoryType === currentSpecs.memoryType || currentSpecs.memoryType === null))
            || 
          item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }
        break;
      case "cpu":
        if (
          ((item.cpuSocketType === currentSpecs.cpuSocketType || currentSpecs.cpuSocketType === null)
            &&
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null))
            || 
          item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }
        break;
      case "ram":
        if (
          ((item.memoryType === currentSpecs.memoryType || currentSpecs.memoryType === null)
            &&
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null))
            || 
          item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }
        break;
      case "gpu":
        if (
          ((item.graphicsCardInterface === currentSpecs.graphicsCardInterface || currentSpecs.graphicsCardInterface === null)
            &&
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null))
            || 
          item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }
        break;
      case "psu":
        if (item.maxWattage >= currentSpecs.totalWattage
            || 
          item.name === currentSelection[componentType].name)
         {
          disabled = false;
        }
        break;
    }

    return (
      <Item
        key={item.name}
        componentType={props.name}
        item={item}
        disabled={disabled}
        selectionHandler={props.selectionHandler}
      />
    );
  }

  const listItems = props.items.map((item) =>
    compatibilityCheck(props.currentSpecs, props.currentSelection, props.name, item)
  );

  return (
    <div>
      <h1>{props.name}</h1>
      {listItems}
    </div>
  );
};

export default ItemList;
