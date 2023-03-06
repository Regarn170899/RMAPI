import React from "react";
import styles from "./Characters.module.css";
import { Link } from "react-router-dom";

const Characters = ({ handleLike, characters }) => {
  return (
    <div className={styles.containerCard}>
      {characters.map((character) => (
        <Link
          to={`${character.id}`}
          key={character.id}
          className={styles.cardBorder}
        >
          <div>
            <img
              className={styles.imgCard}
              src={character.image}
              alt="картинка перса"
            />
          </div>
          <h3>{character.name}</h3>
          <p>{character.status}</p>
          <p>{character.id}</p>
          <p>Last location: {character?.location.name}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleLike(character.id);
            }}
          >
            {character.like ? "unLike" : "Like"}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Characters;
