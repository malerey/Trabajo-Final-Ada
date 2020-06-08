import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

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

const LinkIndividualInfo = ({ info }) => {
  const category = useParams().category;
  return (
    <>
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
    </>
  )
};

export default LinkIndividualInfo;