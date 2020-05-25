import React from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
`;
const Card = styled.div`
    width: 80%;
    height: auto;
  img {
      width: 80%;
      height:80%;
    
  }
`;

const CardsRow = ({ title, info }) => {
  console.log(info);
  return (
    <>
      <div>{title}</div>
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
    </>
  );
};

export default CardsRow;
