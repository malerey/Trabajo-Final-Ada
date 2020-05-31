import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "styled-components";

const DivWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-center;
  padding: 10px;
  a {
    text-decoration: none;
    margin: 0;
    height: auto;
    margin-bottom: 20px;
    padding: 0px 4px;
    overflow: hidden;
    width: 20%;
    height: 20;
  }
`;

const Title = styled.div`
  margin-bottom: 50px;
`;

const Card = styled.div`
  img {
    width: 80%;
    height: 80%;
  }

  :hover {
    img {
      transform: scale(1.1);
      transition: all 0.4s;
    }
  }
`;

const ShowCard = ({ info }) => {
  const category = useParams().category;
  
  return (
    <>
      <Title>
        {category === "movie"
          ? "Películas que son tendencia"
          : "Series que son tendencia"}
      </Title>
      <DivWrap>
        {info.map((card) => (
          <Link to={`${category}/${card.id}`} key={card.id}>
            <Card key={card.id}>
              <img
                alt={card.title}
                src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
              />
              <p>{card.title ? card.title : card.name}</p>
            </Card>
          </Link>
        ))}
      </DivWrap>
    </>
  );
};

export default ShowCard;
