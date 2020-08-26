import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Form from "./Components/Form";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  1. Change specs based on selection
//  2. Clicking a 'selected' component removes it from selection state (and specs) 
//  3. Conditional formatting for selected & disabled buttons
//////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [selection, setSelection] = useState({
    case: { name: null, formFactor: null, price: null, url: null },
    hardDrive: { name: null, brand: null, type: null, size: null, hardwareInterface: null, diskSpace: null, price: null, url: null },
    motherboard: { name: null, brand: null, formFactor: null, cpuSocketType: null, graphicsCardInterface: null, wattage: null, maxMemory: null, ramSlots: null, memoryType: null, wireless: null, price: null, url: null },
    cpu: { name: null, brand: null, cpuSocketType: null, wattage: null, processorSpeed: null, cores: null, memoryType: null, price: null, url: null },
    ram: { name: null, brand: null, memorySize: null, memoryType: null, sticks: null, wattage: null, price: null, url: null },
    gpu: { name: null, brand: null, graphicsCardInterface: null, wattage: null, graphicRamSize: null, price: null,  url: null },
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

  function setSpecsHandler(currentSelection) {
      // We can use the || logical operator. as long as 1 property returns a value, should be fine.
      //Search object.keys to research 'resetting' an objects values.

      const currentSpecs = {...specs};

      currentSpecs.formFactor = currentSelection.case.formFactor || currentSelection.motherboard.formFactor;
      currentSpecs.diskSpace = currentSelection.hardDrive.diskSpace;
      //currentSpecs.totalDisks 
      currentSpecs.cpuSocketType = currentSelection.motherboard.cpuSocketType || currentSelection.cpu.cpuSocketType;
      currentSpecs.memoryType = currentSelection.ram.memoryType || currentSelection.motherboard.memoryType || currentSelection.cpu.memoryType;
      currentSpecs.totalMemory = currentSelection.ram.memorySize;
      currentSpecs.maxMemory = currentSelection.motherboard.maxMemory;
      //currentSpecs.totalRamSlots 
      //currentSpecs.maxRamSlots ;
      currentSpecs.graphicsCardInterface = currentSelection.gpu.graphicsCardInterface || currentSelection.motherboard.graphicsCardInterface;
      //currentSpecs.totalWattage
      currentSpecs.maxWattage = currentSelection.psu.wattage;
      currentSpecs.wireless = currentSelection.motherboard.wireless;
      //currentSpecs.price;

      setSpecs({...currentSpecs});

      console.log(specs);
  };

  //We need to re-write the specs state everytime the selection state is updated.
  function selectionHandler(componentType, component) {
    const currentSelection = {...selection}

    setSelection({...selection, [componentType]: component}); 

    setSpecsHandler(currentSelection);
  }

  // useEffect(() => {
  //   console.log(selection);
  // })

  return (
    <div className="App">
      <Form selectionHandler={selectionHandler.bind(this)} currentSpecs={specs} />
    </div>
  );
}

export default App;
