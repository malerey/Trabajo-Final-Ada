import React, { useState, useEffect } from "react";
import CardsRow from "./CardsRow";
import styled from "styled-components";
import CardInfoFull from './CardInfoFull';
import {useHistory} from 'react-router-dom';

const ContainerCardsRow = styled.section`
  background-color: rgb(35, 39, 42);
  color: rgb(220, 221, 222);
    padding: 20px;
  a {
    text-decoration: none;
  }
`;

const HomeComponent = () => {
  const [peliculasHome, setPeliculasHome] = useState([]);
  const [seriesHome, setSeriesHome] = useState([]);
 
  // SOLUCION ACA
  // GUARDO TODA LA INFO EN UN ESTADO QUE SEA UN ARRAY Y CADA OCSA COMPLETE UN CAMPO

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
    )
      .then((res) => res.json())
      .then((data) => setPeliculasHome(data.results));
    fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
    )
      .then((res) => res.json())
      .then((data) => setSeriesHome(data.results));
  }, []);


  return (
    <ContainerCardsRow>
      <CardsRow
        name={"movie"}
        title={"Películas que son tendencia"}
        info={peliculasHome}
      />
        <CardsRow
          name={"tv"}
          title={"Series que son tendencia"}
          info={seriesHome}
        />
    </ContainerCardsRow>
  );
};

export default HomeComponent;
