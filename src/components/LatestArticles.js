import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { useState } from "react";
import card1 from "./images/Slide1Card1.png";
import card2 from "./images/Slide1Card2.png";
import card3 from "./images/Slide1Card3.png";
import card4 from "./images/Slide2Card1.png";
import card5 from "./images/Slide2Card2.png";
import card6 from "./images/Slide2Card3.png";

function LatestArticles() {
  const [pageValue, setPageValue] = useState(true);
  const setClickValue = (value) => {
    setPageValue(value);
  };
  const cardsContent1 = [
    {
      imgSource: card1,
      title: "Grilled Tomatoes at Home",
      content: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      imgSource: card2,
      title: "Snacks for Travel",
      content: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      imgSource: card3,
      title: "Post-workout Recipes",
      content: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
  ];
  const cardsContent2 = [
    {
      imgSource: card4,
      title: "How To Grill Corn",
      content: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      imgSource: card5,
      title: "Crunchwrap Supreme",
      content: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      imgSource: card6,
      title: "Broccoli Cheese Soup",
      content: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
  ];
  return (
    <MainDiv>
      <StyledHeading>Latest Articles</StyledHeading>
      {pageValue ? (
        <CardsDiv>
          {cardsContent1.map((item) => {
            return (
              <Cards
                imgSource={item.imgSource}
                title={item.title}
                content={item.content}
              />
            );
          })}
          <Cards />
        </CardsDiv>
      ) : (
        <CardsDiv>
          {cardsContent2.map((item) => {
            return (
              <Cards
                imgSource={item.imgSource}
                title={item.title}
                content={item.content}
              />
            );
          })}
          <Cards />
        </CardsDiv>
      )}
      <Pagination pageValue={pageValue} setPageValue={setClickValue} />
    </MainDiv>
  );
}

export default LatestArticles;

const MainDiv = styled.div`
  /* height: 995px; */
`;
const StyledHeading = styled.span`
  display: inline-block;
  color: var(--primary, #0e2368);
  font-family: "Poppins", sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 75%;
  letter-spacing: 2.24px;
  margin: 158px 0 84px 107px;
  @media screen and (max-width: 376px) {
    margin: 150px 0 0px 0;
    color: var(--primary, #0e2368);
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px; /* 192.857% */
    letter-spacing: 1.12px;
  }
`;

const CardsDiv = styled.div`
  /* height: 555px; */
  display: flex;
  gap: 42px;
  padding: 0 108px;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    padding: 50px 50px 0 50px;
  }
`;
