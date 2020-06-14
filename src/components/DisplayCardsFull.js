import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShowCards from "./ShowCards";
import { useParams, useHistory } from "react-router-dom";

// const CardContainer = styled.section`
// padding: 10px;
// // // justify-content: space-between;
// // // height: 100%;
// // `;

// const ShowCardContainer = styled.div`
// margin-bottom: 20px;
// padding: 0px 4px;
//   flex: 1;

// `;

const DisplayCardsFull = () => {
  const category = useParams().category;
  const [cardsInfo, setCardsInfo] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/${category}/week?api_key=f56caaebb5b600d34fe93fe163881e2c&page=${page}`
      );
      const data = await res.json();
      setCardsInfo(data.results);
      setPageNumbers(data.total_pages);
    };
    fetchApi();
    // el array al final del useEffect dice si este fetch tiene que hacerse varias veces o solo una
    // si esta vacio, se hace una sola vez. 
    // en este caso esta vacio, por eso si vemos primero series y despues vamos a peliculas, 
    // vamos a seguir viendo la info de las series. 
    // en este array deberia estar incluido "category" para resolver ese problema
    // asi 
    // }, [category]);
  }, []);
  // recorda siempre borrar los console log 
  console.log(pageNumbers);
  return (
    <ShowCards
      postsPerPage={cardsInfo.length}
      pageNumbers={pageNumbers}
      info={cardsInfo}
    />
  );
};

export default DisplayCardsFull;
