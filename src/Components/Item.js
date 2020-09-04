import React from "react";
import styled, {css} from 'styled-components';

const Button = styled.button`
    border: 0;
    padding: 5px;
    margin: 5px;

    ${props => props.disabled && css`
      background: #ccc;
    `}
  `;

const Item = (props) => {
  

  function selectHandler() {
    props.selectionHandler(props.componentType, props.item);
  }

  return (
    <Button
      onClick={selectHandler}
      disabled={props.disabled}
    >
      {props.item.name}
    </Button>
  );
};

export default Item;
