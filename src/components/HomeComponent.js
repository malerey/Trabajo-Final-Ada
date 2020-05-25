import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const ContainerCardRow = styled.section`
display: flex`

const Pelicula = styled.article`
  display: flex;

`

const HomeComponent = () => {
  const [peliculasHome, setPeliculasHome] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movies/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
    )
      .then((res) => res.json())
      .then((data) => setPeliculasHome(data.results));
  }, []);

  console.log(peliculasHome);



  return (
    <ContainerCardRow>
      {peliculasHome.map((pelicula, i) => (
          i <= 4 && (
            <Pelicula key={pelicula.id}>
              <img 
              alt={pelicula.title}
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} 

              />
              <p>{pelicula.title}</p>
            </Pelicula>
            )
   
      ))}
    </ContainerCardRow>
  );
};

export default HomeComponent;
