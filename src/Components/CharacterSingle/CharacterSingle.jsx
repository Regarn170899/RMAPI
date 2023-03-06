import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CharacterSingle.module.css";
import axios from "axios";

const CharacterSingle = () => {
  const { id } = useParams();
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  const [singleCharacter, setSingleCharacter] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(api);
        setSingleCharacter(res.data);
      } catch (e) {
        console.error(e);
        setSingleCharacter([]);
      }
    };
    getCharacters();
  }, [api]);
  return (
    <div className={styles.singleCharContainer}>
      <div className={styles.singleCharCard}>
        <img className={styles.imgCard} src={singleCharacter.image} alt="" />
        <div className={styles.singleCharDescription}>
          <h3>{singleCharacter.name}</h3>
          <p>Status: {singleCharacter.status}</p>
          <p>Species: {singleCharacter.species}</p>
          <p>Gender: {singleCharacter.gender}</p>
          <p>Last location: {singleCharacter.location?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterSingle;
