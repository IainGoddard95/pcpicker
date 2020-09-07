import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  let disabled = true;
  let selected = false;

  function compatibilityCheck(currentSpecs, currentSelection, componentType, item) {
    switch (componentType) {
      case "case":
        if ((
          item.formFactor === currentSpecs.formFactor ||
          currentSpecs.formFactor === null || item.name === currentSelection[componentType].name)
            && 
          (item.name === currentSelection.case.name || currentSelection.case.name === null)
        ) {
          disabled = false;
        } else {
          disabled = true;
        }
        break;
      case "hardDrive":
        if(
          ((currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null)
            &&
          (item.name === currentSelection.hardDrive.name || currentSelection.hardDrive.name === null))
            || 
          item.name === currentSelection[componentType].name
          ){
             disabled = false;
         } else {
          disabled = true;
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
          (item.name === currentSelection.motherboard.name || currentSelection.motherboard.name === null)
            &&
          (item.memoryType === currentSpecs.memoryType || currentSpecs.memoryType === null))
            || 
          item.name === currentSelection[componentType].name)
         {
          disabled = false;
        }  else {
          disabled = true;
        }
        break;
      case "cpu":
        if (
          ((item.cpuSocketType === currentSpecs.cpuSocketType || currentSpecs.cpuSocketType === null)
            &&
          (item.name === currentSelection.cpu.name || currentSelection.cpu.name === null)
            &&
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null))
            || 
          item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }  else {
          disabled = true;
        }
        break;
      case "ram":
        if (
          ((item.memoryType === currentSpecs.memoryType || currentSpecs.memoryType === null)
            &&
          (item.name === currentSelection.ram.name || currentSelection.ram.name === null)
            &&
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null))
            || 
          item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }  else {
          disabled = true;
        }
        break;
      case "gpu":
        if (
          ((item.graphicsCardInterface === currentSpecs.graphicsCardInterface || currentSpecs.graphicsCardInterface === null)
            && 
          (item.name === currentSelection.gpu.name || currentSelection.gpu.name === null)
            &&
          (currentSpecs.maxWattage >= currentSpecs.totalWattage - currentSelection[componentType].wattage + item.wattage || currentSpecs.maxWattage === null))
            || 
          item.name === currentSelection[componentType].name
        ) {
          disabled = false;
        }  else {
          disabled = true;
        }
        break;
      case "psu":
        if ((item.maxWattage >= currentSpecs.totalWattage
            || 
          item.name === currentSelection[componentType].name)
          && 
          (item.name === currentSelection.psu.name || currentSelection.psu.name === null))
         {
          disabled = false;
        }  else {
          disabled = true;
        }
        break;
    }
  }

  function checkIfSelected(currentSelection, item) {
    for(let i = 0; currentSelection.length; i++) {
      console.log (currentSelection[i].name, item.name);
      console.log("TESTING");
      if(currentSelection[i].name === item.name) {
        selected = true;
      }
    }
  }

  const listItems = props.items.map(item => {
    compatibilityCheck(props.currentSpecs, props.currentSelection, props.name, item);
    if(props.currentSelection[props.name].name === item.name) {
      console.log(props.currentSelection[props.name].name , item);
      selected = true;
    } else {
      selected = false;
    }

    return (
      <Item
        key={item.name}
        componentType={props.name}
        item={item}
        disabled={disabled}
        selected={selected}
        selectionHandler={props.selectionHandler}
      />
    );
  }
    
  );

  return (
    <div>
      <h1>{props.name}</h1>
      {listItems}
    </div>
  );
};

export default ItemList;
