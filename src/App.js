import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import ItemBreakdownTable from "./Components/ItemBreakdownTable";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  1. Change specs based on selection **DONE**
//  2. Clicking a 'selected' component removes it from selection state (and specs) **DONE**
//  3. Conditional formatting for selected & disabled buttons
//////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [selection, setSelection] = useState({
    case: { name: null, formFactor: null, price: null, url: null },
    hardDrive: {
      name: null,
      brand: null,
      type: null,
      size: null,
      hardwareInterface: null,
      diskSpace: null,
      price: null,
      wattage: null,
      url: null,
    },
    motherboard: {
      name: null,
      brand: null,
      formFactor: null,
      cpuSocketType: null,
      graphicsCardInterface: null,
      wattage: null,
      maxMemory: null,
      ramSlots: null,
      memoryType: null,
      wireless: null,
      price: null,
      url: null,
    },
    cpu: {
      name: null,
      brand: null,
      cpuSocketType: null,
      wattage: null,
      processorSpeed: null,
      cores: null,
      memoryType: null,
      price: null,
      url: null,
    },
    ram: {
      name: null,
      brand: null,
      memorySize: null,
      memoryType: null,
      sticks: null,
      wattage: null,
      price: null,
      url: null,
    },
    gpu: {
      name: null,
      brand: null,
      graphicsCardInterface: null,
      wattage: null,
      graphicRamSize: null,
      price: null,
      url: null,
    },
    psu: { name: null, brand: null, maxWattage: null, wattage: null, price: null, url: null },
  });

  const [specs, setSpecs] = useState({
    formFactor: null,
    diskSpace: null,
    totalDisks: null,
    cpuSocketType: null,
    memoryType: null,
    totalMemory: null,
    maxMemory: null,
    totalRamSlots: null,
    maxRamSlots: null,
    graphicsCardInterface: null,
    totalWattage: null,
    maxWattage: null,
    wireless: null,
    totalPrice: null,
  });

  useEffect(() => {
    console.log("current Selection", selection);
    console.log("specs", specs);
  });

  function specsHandler(operator, currentSelection, component) {
    const currentSpecs = { ...specs };

    currentSpecs.formFactor =
      currentSelection.case.formFactor ||
      currentSelection.motherboard.formFactor;
    currentSpecs.diskSpace = currentSelection.hardDrive.diskSpace;
    //currentSpecs.totalDisks
    currentSpecs.cpuSocketType =
      currentSelection.motherboard.cpuSocketType ||
      currentSelection.cpu.cpuSocketType;
    currentSpecs.memoryType =
      currentSelection.ram.memoryType ||
      currentSelection.motherboard.memoryType ||
      currentSelection.cpu.memoryType;
    currentSpecs.totalMemory = 0;
    currentSpecs.maxMemory = currentSelection.motherboard.maxMemory;
    //currentSpecs.totalRamSlots
    currentSpecs.maxRamSlots = currentSelection.motherboard.maxRamSlots;
    currentSpecs.graphicsCardInterface =
      currentSelection.gpu.graphicsCardInterface ||
      currentSelection.motherboard.graphicsCardInterface;
    currentSpecs.maxWattage = currentSelection.psu.maxWattage;
    currentSpecs.wireless = currentSelection.motherboard.wireless;

    if (operator === "plus") {
      currentSpecs.totalPrice += component.price;
      currentSpecs.totalWattage += component.wattage;
    } else if (operator === "sub") {
      currentSpecs.totalPrice -= component.price;
      currentSpecs.totalWattage -= component.wattage;
    }

    setSpecs({ ...currentSpecs });
  }

  function resetObject(obj) {
    Object.keys(obj).forEach((key) => (obj[key] = null));
  }

  function selectionHandler(componentType, component) {
    const currentSelection = { ...selection };

    let operator = null;

    console.log("selection handler", currentSelection[componentType], component);

    if (currentSelection[componentType].name === component.name) {
      resetObject(currentSelection[componentType]);
      operator = "sub";
    } else {
      console.log(false);
      currentSelection[componentType] = component;
      operator = "plus";
    }

    setSelection({ ...selection, ...currentSelection });

    specsHandler(operator, currentSelection, component);
  }

  return (
    <div className="App">
      <Form
        selectionHandler={selectionHandler.bind(this)}
        currentSpecs={specs}
        currentSelection={selection}
      />
      <br />
      <ItemBreakdownTable></ItemBreakdownTable>
    </div>
  );
}

export default App;
