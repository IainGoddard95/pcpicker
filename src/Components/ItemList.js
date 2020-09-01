import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  function compatibilityCheck(currentSpecs, componentType, item) {
    let disabled = false;

    switch (componentType) {
      case "case":
        if (
          item.formFactor === currentSpecs.formFactor ||
          currentSpecs.formFactor === null
        ) {
          disabled = false;
        } else {
          disabled = true;
        }
        break;
      // case "hardDrive":
      //   if(item.cpuSocketType === currentSpecs.cpuSocketType || currentSpecs.cpuSocketType === null) {
      //       disabled = false;
      //   } else {
      //       disabled = true;
      //   }
      //   break;
      case "motherboard":
        if (
          (item.cpuSocketType === currentSpecs.cpuSocketType ||
            currentSpecs.cpuSocketType === null) &&
          (item.formFactor === currentSpecs.formFactor ||
            currentSpecs.formFactor === null) &&
          (item.graphicsCardInterface === currentSpecs.graphicsCardInterface ||
            currentSpecs.graphicsCardInterface === null)
        ) {
          disabled = false;
        } else {
          disabled = true;
        }
        break;
      case "cpu":
        if (
          item.cpuSocketType === currentSpecs.cpuSocketType ||
          currentSpecs.cpuSocketType === null
        ) {
          disabled = false;
        } else {
          disabled = true;
        }
        break;
      case "ram":
        if (
          item.memoryType === currentSpecs.memoryType ||
          currentSpecs.memoryType === null
        ) {
          disabled = false;
        } else {
          disabled = true;
        }
        break;
      case "gpu":
        if (
          item.graphicsCardInterface === currentSpecs.graphicsCardInterface ||
          currentSpecs.graphicsCardInterface === null ||
          currentSpecs.maxWattage >= currentSpecs.totalWattage + item.wattage
        ) {
          disabled = false;
        } else {
          disabled = true;
        }
        break;
      case "psu":
        if (item.maxWattage >= currentSpecs.totalWattage) {
          disabled = false;
        } else {
          disabled = true;
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
    compatibilityCheck(props.currentSpecs, props.name, item)
  );

  return (
    <div>
      <h1>{props.name}</h1>
      {listItems}
    </div>
  );
};

export default ItemList;
