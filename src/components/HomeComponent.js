import React, { useState, useEffect } from "react";
import CardsRow from './CardsRow'
import styled from 'styled-components';


const ContainerCardsRow = styled.section`
${'' /* display: flex */}
`





const HomeComponent = () => {
  const [cardHome, setCardHome] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=f56caaebb5b600d34fe93fe163881e2c`
    )
      .then((res) => res.json())
      .then((data) => setCardHome(data.results));
  }, []);

  console.log(cardHome);



  return (
    <ContainerCardsRow>
      <CardsRow id={"movies"} title={"Películas que son tendencia"} cardHome={cardHome} />
      <CardsRow id={"tv"} title={"Series que son tendencia"} cardHome={cardHome} />
     </ContainerCardsRow>
  );
};

export default HomeComponent;
