import React from "react";
import { styled } from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import Car from "./images/Screenshot_669 1.png";

// create seprete variable for styled compoenent css.

const Footer = () => {
  return (
    <Wrapper>
      <Main>
        {/* Image Section */}
        <ImgDiv>
          <StyledImg src={Car} alt="Car-Trolley Not Found!" />
        </ImgDiv>

        {/* Contact-US Section */}
        <ContactUs>
          <StyledH>Contact Us</StyledH>
          <StyledP>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </StyledP>
          <StyledP>example2020@gmail.com</StyledP>
          <StyledP>(904) 443-0343</StyledP>
        </ContactUs>

        {/* More Section */}
        <More>
          <StyledH>More</StyledH>
          <StyledP>About Us</StyledP>
          <StyledP>Products</StyledP>
          <StyledP>Career</StyledP>
          <StyledP>Contact Us</StyledP>
        </More>

        {/* Social-Media Section */}
        <Social>
          <div>
            <StyledH className="socialLinks">Social Links</StyledH>
            <IconsDiv>
              <Icon>
                <FiInstagram size="15px" />
              </Icon>
              <Icon>
                <GrFacebookOption size="15px" />
              </Icon>
              <Icon>
                <BsTwitter size="15px" />
              </Icon>
            </IconsDiv>
          </div>
          <ReserveRights>© 2022 Food Truck Example</ReserveRights>
        </Social>
      </Main>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  @media screen and (max-width: 376px) {
    text-align: left;
  }
`;

const Main = styled.div`
  height: 362px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;

  @media screen and (max-width: 376px) {
    width: 100%;
    height: 600px;
    display: block;
    font-size: 13px;
    padding: 10px 42px;
    box-sizing: border-box;
  }
`;

const ImgDiv = styled.div`
  /* width: 350px; */
  flex: 2;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 376px) {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 42px 0;
  }
`;
const StyledImg = styled.img`
  width: 161px;
  height: 125px;
  @media screen and (max-width: 376px) {
    width: 75px;
    height: 58px;
  }
`;

const ContactUs = styled.div`
  /* width: 300px; */
  flex: 1;
  height: fit-content;
  padding: 20px;
  @media screen and (max-width: 376px) {
    width: 100%;
    height: fit-content;
    padding: 0 0;
    .email {
      margin: 0 0px;
    }
  }
`;

const More = styled.div`
  /* width: 350px; */
  flex: 1;
  height: fit-content;
  padding: 20px;
  margin-left: 60px;

  @media screen and (max-width: 376px) {
    width: 100%;
    height: fit-content;
    padding: 30px 0;
    margin-left: 0;
  }
`;
const IconsDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Icon = styled.span`
  font-size: 20px;
  margin: 0 10px;
  color: #0e2368;
`;
const Social = styled.div`
  /* width: 350px; */
  flex: 1;
  height: fit-content;
  padding: 20px 20px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media only screen and (max-width: 376px) {
    width: 100%;
    height: 120px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 0;
    .socialLinks {
      display: none;
    }
  }
`;
const StyledH = styled.span`
  color: var(--primary, #0e2368);
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18.843px;
  font-style: normal;
  font-weight: 600;
  line-height: 27.218px; /* 144.444% */
  letter-spacing: 0.565px;
  @media only screen and (max-width: 376px) {
    font-size: 15.771px;
    line-height: 34.804px; /* 220.685% */
    letter-spacing: 0.473px;
  }
`;
const StyledP = styled.p`
  color: #646874;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14.656px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.031px; /* 157.143% */
  @media only screen and (max-width: 376px) {
    width: 275px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 8.762px;
    line-height: 12.266px; /* 140% */
  }
`;
const ReserveRights = styled.span`
  color: var(--828-b-9-c, #828b9c);
  font-family: Roboto;
  font-size: 14.656px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.124px; /* 171.429% */
  @media only screen and (max-width: 376px) {
    color: #828b9c;
    font-family: Roboto;
    font-size: 8.762px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.127px; /* 366.676% */
  }
`;
