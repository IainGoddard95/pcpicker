import React from "react";
import ItemDetailText from './ItemDetailText';

const SpecsOverallTable = (props) => {

    const listSpecs =
        Object.entries(props.specs).map(([key, value]) => { 
            return( <ItemDetailText label={key} value={value}/> )
        });

  return (
    <div>
      <h1>BUILD SPECS</h1>
      {listSpecs}
    </div>
  );
};

export default SpecsOverallTable;