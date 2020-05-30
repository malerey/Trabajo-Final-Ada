import React, { useState, useEffect } from "react";
import CardsRow from "./CardsRow";
import styled from "styled-components";

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
  // const [title, setTitle] = useState([])
  // crear un estado con el titulo para despues hacer una funcion que se lo pase a display cards
  // o sino fijarme de usar props o algo asi

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

   console.log(peliculasHome)
   console.log(seriesHome)
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
