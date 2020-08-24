import React from "react";

const Input = (props) => {
  const listOptions = props.options.map((x) => (
    <div key={x.name} onClick={() => props.selectionHandler(props.name, x)}>
      {x.name}
    </div>
  ));

  return (
    <div>
      <h1>{props.name}</h1>
      {listOptions}
    </div>
  );
};

export default Input;
