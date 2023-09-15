import React from "react";
import styled from "styled-components";
import { Button2 } from "./Button";

function Cards({ imgSource, title, content }) {
  return (
    imgSource &&
    title &&
    content && (
      <CardsDiv>
        <StyledImg src={imgSource} alt="" />
        <TextDiv>
          <StyledSpan>{title}</StyledSpan>
          <StyledSpan2>{content}</StyledSpan2>
          <Button2 />
        </TextDiv>
      </CardsDiv>
    )
  );
}

export default Cards;

const CardsDiv = styled.div`
  width: 380px;
  padding: 27px;
  border-radius: 20.937px;
  border: 2px solid rgba(147, 162, 211, 0.38);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 376px) {
    box-sizing: border-box;
    width: 271px;
    padding: 0;
  }
`;
const StyledImg = styled.img`
  @media screen and (max-width: 376px) {
    margin: 30px;
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 15px;
  @media screen and (max-width: 376px) {
    padding: 0 15px 30px 15px;
    gap: 0;
  }
`;
const StyledSpan = styled.span`
  color: var(--primary, #0e2368);
  font-family: "Poppins", sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; /* 128.571% */
  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 35px;
    letter-spacing: 0.8px;
  }
`;
const StyledSpan2 = styled.span`
  color: var(--body, #444957);
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 180% */
  letter-spacing: -0.3px;
  @media screen and (max-width: 376px) {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 12px;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.12px;
    text-align: left;
  }
`;
