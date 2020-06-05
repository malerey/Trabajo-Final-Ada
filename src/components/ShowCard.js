import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import LinkIndividualInfo from './LinkIndividualInfo';

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
     <LinkIndividualInfo info={info}/>
      </DivWrap>
    </>
  );
};

export default ShowCard;
