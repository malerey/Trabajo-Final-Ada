import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


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

const handleClick = (title, name, e) => {
  // console.log(e.target.value);
  console.log(e)
  console.log(title)
  console.log(name)
};

const CardsRow = ({ info, title, name }) => {
  
    return (
    <>
      
        <Link to="/displaycardsfull">
        <div>
        <h2 onClick={(e) => handleClick(title, name, e)}>{title}</h2>
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
