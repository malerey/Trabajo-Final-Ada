import React from "react";
// import DisplayCardsFull from "./DisplayCardsFull";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const CardContainer = styled.article`
  display: flex;

`;
const Card = styled.div`
  width: 80%;
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

const handleClick = (e) => {
  console.log("hola ");
};

const CardsRow = ({ title, info }) => {
    return (
    <>
      <Router>
        <Link to="/displaycardsfull">{title}</Link>
        </Router>
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
