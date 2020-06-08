import React, { useState, useEffect } from "react";
import CardsRow from "./CardsRow";
import styled from "styled-components";
import CardInfoFull from "./CardInfoFull";
import { useHistory } from "react-router-dom";

const ContainerCardsRow = styled.section`
  background-color: rgb(35, 39, 42);
  color: rgb(220, 221, 222);
  padding: 20px;
  a {
    text-decoration: none;
  }
`;

const HomeComponent = () => {
  const [moviesHome, setMoviesHome] = useState([]);
  const [seriesHome, setSeriesHome] = useState([]);



  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
      );
      const movies = await res.json();
      setMoviesHome(movies.results);
    };
    const fetchSeries = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
      );
      const series = await data.json();
      setSeriesHome(series.results);
    };
    fetchMovies();
    fetchSeries();
  }, []);

  return (
    <ContainerCardsRow>
      <CardsRow
        category={"movie"}
        title={"Películas que son tendencia"}
        info={moviesHome}
      />
      <CardsRow
        category={"tv"}
        title={"Series que son tendencia"}
        info={seriesHome}
      />
    </ContainerCardsRow>
  );
};

export default HomeComponent;
