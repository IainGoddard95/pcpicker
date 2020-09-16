import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  ${(props) =>
    props.disabled &&
    css`
      background: #eee;
      border: 1px solid transparent;
    `}

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid green;
      background: rgb(232, 255, 224);

      &:hover {
        background: rgb(250, 204, 202);
      }
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
      selected={props.selected}
    >
      {props.item.name}
    </Button>
  );
};

export default Item;
