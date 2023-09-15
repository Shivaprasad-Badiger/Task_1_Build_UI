import React from "react";
import styled from "styled-components";
import "@fontsource-variable/open-sans";

export function Button1({ width, height, fontSize, content, W, H }) {
  return (
    <div>
      <StyledButton width={width} height={height} fontSize={fontSize} W={W} H={H}>
        {content}
      </StyledButton>
    </div>
  );
}

export function Button2() {
  return (
    <div>
      <StyledButton2>Read More</StyledButton2>
    </div>
  );
}

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 34px;
  background: #e23744;
  color: white;
  border: none;
  font-family: "Open Sans Variable", sans-serif;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  @media screen and (max-width: 376px) {
    width: 100px;
    height: 30px;
    width: ${(props) => props?.W};
    height: ${(props) => props?.H};
    font-size: 12px;
  }
`;
const StyledButton2 = styled.button`
  display: inline-block;
  width: 131px;
  height: 42px;
  padding: 3px 26px;
  gap: 10px;
  border-radius: 21px;
  border: 1px solid #424961;
  background-color: transparent;
  font-family: "Open Sans Variable", sans-serif;
  @media screen and (max-width: 376px) {
    margin: 30px 0 15px 0;
    width: 118px;
    height: 26px;
    padding: 4px 0px;
    font-size: 12px;
  }
`;
