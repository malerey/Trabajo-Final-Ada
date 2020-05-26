import React, { useState, useEffect } from "react";
import CardsRow from './CardsRow'
import styled from 'styled-components';


const ContainerCardsRow = styled.section`
${'' /* display: flex */}
a {
    text-decoration: none;
  }
`


const HomeComponent = () => {
  const [peliculasHome, setPeliculasHome] = useState([]);
  const [seriesHome, setSeriesHome] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movies/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
    )
      .then((res) => res.json())
      .then((data) => setPeliculasHome(data.results));
    fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
    )
      .then((res) => res.json())
      .then((data) => setSeriesHome(data.results));
  }, []);

  console.log(peliculasHome);

  return (
    <ContainerCardsRow>
      <CardsRow title={"Películas que son tendencia"} info={peliculasHome} />
      <CardsRow title={"Series que son tendencia"} info={seriesHome} />
    </ContainerCardsRow>
  );
};

export default HomeComponent;
