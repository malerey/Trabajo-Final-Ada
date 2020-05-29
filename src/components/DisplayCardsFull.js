import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShowCard from "./ShowCard";
import { useParams } from "react-router-dom";

const CardContainer = styled.section`
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
// height: 100%;
  // flex-basis: 80%;
`;

const ShowCardContainer = styled.div`
 
`;

const DisplayCardsFull = () => {
  const category = useParams().category;
  const [cardsInfo, setCardsInfo] = useState([]);

  console.log(category);  

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${category}/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
    )
      .then((res) => res.json())
      .then((data) => setCardsInfo(data.results));
  }, [category]);

  console.log(cardsInfo)
  return (
    <CardContainer>
      <ShowCardContainer>
        <ShowCard info={cardsInfo} />
      </ShowCardContainer>
    </CardContainer>
  );
};

export default DisplayCardsFull;
