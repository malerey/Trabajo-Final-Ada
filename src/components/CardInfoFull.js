import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardInfoFull = () => {
  const id = useParams().id;
  const category = useParams().category;
  const [infoId, setInfoId] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${category}/${id}?api_key=f56caaebb5b600d34fe93fe163881e2c`
      );
      const data = await res.json();
      setInfoId(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <p>Nombre: {infoId.title || infoId.name}</p>
      <p>Rating: {infoId.vote_average} </p>
    </>
  );
};

export default CardInfoFull;
