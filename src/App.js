import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [selection, setSelection] = useState({
    case: { name: null, formFactor: null, price: null, url: null },
    hardDrive: { name: null, brand: null, type: null, formFactor: null, hardwareInterface: null, diskSpace: null, price: null, url: null },
    motherboard: { name: null, brand: null, formFactor: null, cpuSocketType: null, graphicsCardInterface: null, wattage: null, maxRam: null, ramSlots: null, memoryType: null, wireless: null, price: null, url: null },
    cpu: { name: null, brand: null, cpuSocketType: null, wattage: null, processorSpeed: null, cores: null, memoryType: null, price: null, url: null },
    ram: { name: null, brand: null, memorySize: null, memoryType: null, sticks: null, wattage: null, price: null, url: null },
    gpu: { name: null, brand: null, graphicsCardInterface: null, wattage: null, graphicRamSize: null, price: null, url: null },
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
    price: null,
  });

  function setSpecsHandler() {
      // We can use the || logical operator. as long as 1 property returns a value, should be fine.

      //Search object.keys to research 'resetting' an objects values.
  };

  //We need to re-write the specs state everytime the selection state is updated.
  function selectionHandler(componentType, component) {
    setSelection({ ...selection, [componentType]: component });
    console.log(selection);
  }

  return (
    <div className="App">
      <Form selectionHandler={selectionHandler.bind(this)} currentSpecs={specs} />
    </div>
  );
}

export default App;
