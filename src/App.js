import React, {
  useState,
  useEffect
} from "react";
import {
  ModalProvider
} from 'styled-react-modal';
import Modal from 'styled-react-modal';
import "./App.css";
import Form from "./Components/Form";
import ItemBreakdownTable from "./Components/ItemBreakdownTable";
import SpecsOverallTable from "./Components/SpecsOverallTable";

///////////////////////////////////////////////////////////////////
///
///   2) Add info button
///        Quick bio of app. Time to dev, tech used etc.
///   3) Move items to Firebase solution
///////////////////////////////////////////////////////////////////

function App() {
  const [selection, setSelection] = useState({
    case: {
      name: null,
      formFactor: null,
      price: null,
      url: null
    },
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
    cpuSocketType: null,
    processorSpeed: null,
    cpuCores: null,
    memoryType: null,
    totalMemory: null,
    maxMemory: null,
    graphicsCardInterface: null,
    totalWattage: null,
    maxWattage: null,
    wireless: null,
    totalPrice: null,
  });

  const [lastSelected, setLastSelected] = useState(null);

  useEffect(() => {
    //console.log();
  });

  function specsHandler(operator, currentSelection, component) {
    const currentSpecs = {
      ...specs
    };

    currentSpecs.formFactor =
      currentSelection.case.formFactor ||
      currentSelection.motherboard.formFactor;
    currentSpecs.diskSpace = currentSelection.hardDrive.diskSpace;
    currentSpecs.cpuSocketType =
      currentSelection.motherboard.cpuSocketType ||
      currentSelection.cpu.cpuSocketType;
    currentSpecs.processorSpeed = currentSelection.cpu.processorSpeed;
    currentSpecs.cpuCores = currentSelection.cpu.cores;
    currentSpecs.memoryType =
      currentSelection.ram.memoryType ||
      currentSelection.motherboard.memoryType ||
      currentSelection.cpu.memoryType;
    currentSpecs.totalMemory = currentSelection.ram.memorySize;
    currentSpecs.maxMemory = currentSelection.motherboard.maxMemory;
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

    setSpecs({
      ...currentSpecs
    });
  }

  function resetSelection() {
    let tempSelection = {
      ...selection
    };
    let tempSpecs = {
      ...specs
    };
    let tempLastSelected = {
      ...lastSelected
    };
    Object.values(tempSelection).forEach((value) => resetObject(value));
    resetObject(tempSpecs);
    resetObject(tempLastSelected);
    setSelection({
      ...tempSelection
    });
    setSpecs({
      ...tempSpecs
    });
    setLastSelected({
      ...lastSelected
    });
  }

  function resetObject(obj) {
    Object.keys(obj).forEach((key) => (obj[key] = null));
  }

  function selectionHandler(componentType, component) {
    const currentSelection = {
      ...selection
    };

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

    setSelection({
      ...selection,
      ...currentSelection
    });

    specsHandler(operator, currentSelection, component);
  }

  function FancyModalButton() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal(e) {
      setIsOpen(!isOpen)
    }
    return ( <
      div >
      <
      button className = "git-btn"
      onClick = {
        toggleModal
      } > Click me < /button> <
      Modal isOpen = {
        isOpen
      }
      onBackgroundClick = {
        toggleModal
      }
      onEscapeKeydown = {
        toggleModal
      } >
      <
      div className = "modalbox" >
      <
      h1 > PC Picker < /h1> <
      h2 > React < /h2> <
      h3 > Time to complete: 60 Hours < /h3> <
      p >
      Users can build a PC by picking components in any order.When a component is selected, a breakdown of the components specs is displayed on a table to the left.Below the breakdown table, we have a build specs table that gradually fills with each selected component. <
      /p> <
      p >
      Each time a component is selected, or unselected by clicking it again, the application checks which components are compatible with the user 's current build. By disabling any incompatible options, the user can only select a viable build.  < /
      p > <
      p >
      Currently, components are hardcoded in the backend of the application.Ideally, this would be transfered to an online storage solution, like Firebase.Or, in a real - life scenario, supplied by a thrid - party API.That way, with a dynamic compatibility checker &
      method of displaying components, extra components can be added without any code maintenance. <
      /p> <
      span onClick = {
        toggleModal
      }
      className = "close-button" > x < /span> < /
      div > <
      /Modal> < /
      div >
    )
  }


  return ( <
    div className = "App" >

    <
    ModalProvider >
    <
    FancyModalButton / >
    <
    /ModalProvider>

    <
    div className = "Form" >
    <
    Form selectionHandler = {
      selectionHandler.bind(this)
    }
    currentSpecs = {
      specs
    }
    currentSelection = {
      selection
    }
    resetObject = {
      resetSelection
    }
    /> < /
    div >

    <
    div className = "BreakdownTable" >
    <
    ItemBreakdownTable item = {
      selection[lastSelected]
    }
    /> < /
    div >

    <
    div className = "SpecsOverallTable" >
    <
    SpecsOverallTable specs = {
      specs
    }
    /> < /
    div >

    <
    /div>
  );
}

export default App;