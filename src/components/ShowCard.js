import React, {useEffect, useState} from "react";
import styled from 'styled-components';

const Card = styled.div`
 display: block;
  height: auto;
  margin-bottom: 20px;
  padding: 0px 4px;
  flex: 1;
  overflow: hidden;
  img {
    width: 50%;
    height: 50%;
  }
  :hover {
    img {
      transform: scale(1.1);
      transition: all 0.4s;
    }
  }
`;

const ShowCard = ({info}) => {

    return (
    <>
     {info.map(
            (card, i) =>
              (
                <Card key={card.id}>
                  <img
                    alt={card.title}
                    src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                  />
                  <p>{card.title}</p>
                </Card>
              )
          )}

    </>
  );
};

export default ShowCard;
