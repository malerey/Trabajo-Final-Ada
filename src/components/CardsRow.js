import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.article`
  display: flex;
`;
const Card = styled.div`
  height: auto;
  margin-bottom: 20px;
  padding: 0px 4px;
  flex: 1;
  overflow: hidden;
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

const CardsRow = ({ info, title, name }) => {
  console.log(info)
  
  return (
    <>
      <Link to={`/${name}`}>

        <div>
          <h2>{title}</h2>
        </div>
    
        <CardContainer>
          {info.map(
            (card, i) =>
              i <= 4 && (
                <Card key={card.id}>
                  <img
                    alt={card.title}
                    src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                  />
                  <p>{card.title}</p>
                </Card>
              )
          )}
        </CardContainer>
      </Link>
    </>
  );
};

export default CardsRow;
