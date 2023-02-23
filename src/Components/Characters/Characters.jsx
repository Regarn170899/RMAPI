import React from "react";
import styles from "./Characters.module.css";

const Characters = ({ handleLike, characters, like }) => {
  return (
    <div className={styles.containerCard}>
      {characters.map((character) => (
        <div key={character.id} className={styles.cardBorder}>
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
          <p>Last location: {character.location.name}</p>
          <button onClick={handleLike}>{like ? "unLike" : "Like"}</button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
