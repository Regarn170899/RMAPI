import React from 'react';
import styles from './Characters.module.css'

const Characters = ({characters, loading}) => {
    if (loading){
        return <h2>Loading...</h2>
    }
    return (
        <div className={styles.containerCard}>
            {characters.map((character)=>(
                <div key={character.id} className={styles.cardBorder}>
                    <div><img className={styles.imgCard} src={character.image} alt="картинка перса"/></div>
                    <h3>{character.name}</h3>
                    <p>{character.status}</p>
                </div>
            ))}
        </div>
    );
};

export default Characters;