import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import ItemBreakdownTable from "./Components/ItemBreakdownTable";

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
    psu: {
      name: null,
      brand: null,
      maxWattage: null,
      wattage: null,
      price: null,
      url: null,
    },
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

  const [lastSelected, setLastSelected] = useState(null);

  useEffect(() => {
    console.log("current Selection", selection);
    console.log("specs", specs);
    //console.log(lastSelected);
    console.log("Last selected", selection[lastSelected]);
  });

  function specsHandler(operator, currentSelection, component) {
    const currentSpecs = { ...specs };

    currentSpecs.formFactor =
      currentSelection.case.formFactor ||
      currentSelection.motherboard.formFactor;
    currentSpecs.diskSpace = currentSelection.hardDrive.diskSpace;
    currentSpecs.cpuSocketType =
      currentSelection.motherboard.cpuSocketType ||
      currentSelection.cpu.cpuSocketType;
    currentSpecs.memoryType =
      currentSelection.ram.memoryType ||
      currentSelection.motherboard.memoryType ||
      currentSelection.cpu.memoryType;
    currentSpecs.totalMemory = 0;
    currentSpecs.maxMemory = currentSelection.motherboard.maxMemory;
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

    if (currentSelection[componentType].name === component.name) {
      resetObject(currentSelection[componentType]);
      setLastSelected(null);
      operator = "sub";
    } else {
      currentSelection[componentType] = component;
      setLastSelected(componentType);
      operator = "plus";
    }

    setSelection({ ...selection, ...currentSelection });

    specsHandler(operator, currentSelection, component);
  }

  return (
    <div className="App">
      <div className="Form">
        <Form
          selectionHandler={selectionHandler.bind(this)}
          currentSpecs={specs}
          currentSelection={selection}
        />
      </div>
      <div className="BreakdownTable">
        <ItemBreakdownTable item={selection[lastSelected]} />
      </div>
      <div className="BreakdownTable2">
        <ItemBreakdownTable item={selection[lastSelected]} />
      </div>
    </div>
  );
}

export default App;
