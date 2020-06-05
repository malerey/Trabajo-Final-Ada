import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const CardContainer = styled.article`
  display: flex;
`;
const Card = styled.div`
  height: auto;
  margin-bottom: 20px;
  padding: 0px 4px;
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
  const category = name;
  console.log(category)

  return (
    <>
      <Link to={`/${name}`}>
        <h2>{title}</h2>
      </Link>
      {/* ACA ME FALTA TAL VEZ RENDERIZAR UN COMPONENTE EN VREZ DE ESTO, Y TRATAR DE CON CONDITIONAL RENDERING UQE ME MUESTRE EL DE 4 NOMAS */}
      <CardContainer>
        {info.map((card, i) => 
          i <= 4 && (
            <Link to={`${category}/${card.id}`} key={card.id}>
              <Card key={card.id}>
                <img
                  alt={card.title}
                  src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                />
                <p>{card.title ? card.title : card.name}</p>
              </Card>
            </Link>
          )
        )}
      </CardContainer>
    </>
  );
};

export default CardsRow;
