import React from "react";
import ItemDetailText from "./ItemDetailText";

const SpecsOverallTable = (props) => {
  let alt = false;

  const listSpecs = Object.entries(props.specs).map(([key, value]) => {
    alt = !alt;
    return <ItemDetailText alt={alt ? "alt" : ""} label={key} value={value} />;
  });

  return (
    <div>
      <h1>BUILD SPECS</h1>
      {listSpecs}
    </div>
  );
};

export default SpecsOverallTable;
