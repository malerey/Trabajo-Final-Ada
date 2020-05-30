import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShowCard from "./ShowCard";
import { useParams } from "react-router-dom";

// const CardContainer = styled.section`
// padding: 10px;
// // justify-content: space-between;
// // height: 100%;
// `;

const ShowCardContainer = styled.div`
margin-bottom: 20px;
padding: 0px 4px;
  flex: 1;

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
  }, []);

  return (
    // <CardContainer>
      <>
        <ShowCard category={category} info={cardsInfo} />
      </>
    // </CardContainer>
  );
};

export default DisplayCardsFull;
