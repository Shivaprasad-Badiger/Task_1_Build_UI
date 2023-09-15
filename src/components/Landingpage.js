import React from "react";
import styled from "styled-components";
import Truck from "./images/Screenshot_669 1.png";
import Pizza from "./images/Group 289.png";
import Vector from "./images/Vector 1.png";
import "@fontsource-variable/open-sans";
import { Button1 } from "./Button";

function Landingpage() {
  return (
    <MainDiv>
      <LeftDiv>
        <StyledImg width="107px" height="83px" src={Truck} alt="truck" />
        <TextDiv>
          <Heading>
            Discover the <Best>Best</Best> Food and Drinks
          </Heading>
          <TextSpan>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </TextSpan>
          <Button1
            width="190px"
            height="63px"
            fontSize="18px"
            content="Explore Now!"
            W="120px"
            H="40px"
          />
        </TextDiv>
      </LeftDiv>
      <RightDiv>
        <div>
          <PizzaImg src={Pizza} alt="pizza" />
          <VectorImg src={Vector} alt="vector" />
        </div>
        <ButtonDiv>
          <Button1
            width="125px"
            height="42px"
            fontSize="16px"
            content="Get In Touch"
            W="100px"
            H="30ox"
          />
        </ButtonDiv>
      </RightDiv>
    </MainDiv>
  );
}

export default Landingpage;
const MainDiv = styled.div`
  display: flex;

  @media screen and (max-width: 376px) {
    flex-direction: column-reverse;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 111px;
  padding: 33px 100px;
  flex: 1;
  @media screen and (max-width: 376px) {
    padding: 0 0;
    justify-content: center;
    align-items: center;
    padding: 63px 100px;
  }
`;
const StyledImg = styled.img`
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextDiv = styled.div`
  width: 350px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 26px;
  @media screen and (max-width: 376px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
const Heading = styled.span`
  color: var(--primary, #0e2368);
  font-family: "Source Sans Pro", sans-serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 600;
  line-height: 69px; /* 111.29% */
  @media screen and (max-width: 376px) {
    width: 240px;
    color: var(--primary, #0e2368);
    text-align: center;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px; /* 121.053% */
  }
`;
const Best = styled.span`
  color: #e23744;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 55px;
  font-style: normal;
  font-weight: 600;
  line-height: 69px;
  @media screen and (max-width: 376px) {
    color: #e23744;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
  }
`;
const TextSpan = styled.span`
  display: block;
  color: var(--body, #444957);
  font-family: "Open Sans Variable", sans-serif;
  font-size: 16.445px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.408px;
  @media screen and (max-width: 376px) {
    width: 250px;
    color: var(--body, #444957);
    text-align: center;
    font-family: "Open Sans Variable", sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 163.636% */
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex: 1;
  background-image: url("./images/Group 289.png");
`;
const PizzaImg = styled.img`
  width: 735px;
  border-bottom-left-radius: 200px;
  @media screen and (max-width: 376px) {
    width: 375px;
    height: 100%;
  }
`;
const VectorImg = styled.img`
  z-index: 1;
  position: absolute;
  width: 752px;
  top: 0;
  transform: translateX(-752px);
  @media screen and (max-width: 376px) {
    height: 425px;
    width: 375px;
    transform: translateX(-375px);
  }
`;
const ButtonDiv = styled.div`
  position: absolute;
  z-index: 1;
  border: 1px solid white;
  border-radius: 34px;
  padding: 0;
  transform: translateY(32px) translateX(550px);
  @media screen and (max-width: 376px) {
    transform: translateY(20px) translateX(260px);
  }
`;
