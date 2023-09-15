import React from "react";
import styled from "styled-components";
import AboutUsImg from "./images/pharmasict-serving-customer-drug-store 1.png";
// Supports weights 300-800
import "@fontsource-variable/open-sans";
import "@fontsource/poppins";
import { Button1 } from "./Button";

function AboutUs() {
  return (
    <OuterDiv>
      <MainDiv>
        <StyledImg src={AboutUsImg} alt="About Us" />
        <SubDiv>
          <SubDivHeading>About Us</SubDivHeading>
          <SubDivContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </SubDivContent>
          <Button1
            height="42px"
            width="132px"
            content="Read More"
            fontSize="16px"
          />
        </SubDiv>
      </MainDiv>
    </OuterDiv>
  );
}

export default AboutUs;
const OuterDiv = styled.div`
  height: 653px;
  display: flex;
  align-items: end;
  @media screen and (max-width: 376px) {
    height: 516px;
    background: linear-gradient(
      90deg,
      rgba(30, 42, 93, 0.04) 30.91%,
      rgba(48, 62, 130, 0.04) 64.79%,
      rgba(60, 80, 157, 0.04) 91.94%
    );
    padding: 50px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background: linear-gradient(
    90deg,
    rgba(30, 42, 93, 0.04) 30.91%,
    rgba(48, 62, 130, 0.04) 64.79%,
    rgba(60, 80, 157, 0.04) 91.94%
  );
  @media screen and (max-width: 376px) {
    height: 516px;
    background: transparent;
  }
`;
const StyledImg = styled.img`
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const SubDiv = styled.div`
  width: 447px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const SubDivHeading = styled.span`
  color: var(--primary, #0e2368);
  font-family: "Poppins", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: 60%;
  @media screen and (max-width: 376px) {
    color: var(--primary, #0e2368);
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px; /* 134.615% */
  }
`;
const SubDivContent = styled.p`
  color: var(--body, #444957);
  font-family: "Open Sans Variable", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 180% */
  @media screen and (max-width: 376px) {
    color: var(--body, #444957);
    text-align: center;
    font-family: "Open Sans Variable", sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 190.909% */
  }
`;
