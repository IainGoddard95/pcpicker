import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [selection, setSelection] = useState({
    case: "",
    hardDrive: "",
    motherboard: "",
    cpu: "",
    ram: "",
    gpu: "",
    psu: "",
  });

  function selectionHandler(componentType, component) {
    setSelection({ ...selection, [componentType]: component });
    console.log(selection);
  }

  return (
    <div className="App">
      <Form selectionHandler={selectionHandler.bind(this)} />
    </div>
  );
}

export default App;
