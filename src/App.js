import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  1. Change specs based on selection **DONE**
//  2. Clicking a 'selected' component removes it from selection state (and specs)
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
    psu: { name: null, brand: null, wattage: null, price: null, url: null },
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

  function specsHandler(currentSelection) {
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
    currentSpecs.totalWattage = 0;
    currentSpecs.maxWattage = currentSelection.psu.wattage;
    currentSpecs.wireless = currentSelection.motherboard.wireless;
    currentSpecs.totalPrice = 0;

    setSpecs({ ...currentSpecs });
  }

  function resetObject(obj) {
    Object.keys(obj).forEach((key) => (obj[key] = null));
  }

  function configurationHandler(componentType, component) {
    const currentSelection = { ...selection };

    selectionHandler(componentType, component, currentSelection);
    specsHandler(currentSelection, component);
  }

  function selectionHandler(componentType, component, currentSelection) {
    if (currentSelection[componentType].name === component.name) {
      resetObject(currentSelection[componentType]);
    } else {
      console.log(false);
      currentSelection[componentType] = component;
    }

    setSelection({ ...selection, ...currentSelection });
  }

  return (
    <div className="App">
      <Form
        configurationHandler={configurationHandler.bind(this)}
        currentSpecs={specs}
      />
    </div>
  );
}

export default App;
