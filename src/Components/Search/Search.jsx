import React from "react";
import styles from "./Search.module.css";
const Search = ({ onSearch, setPage }) => {
  return (
    <form className={styles.formContainer}>
      <input onChange={onSearch} type="text" className={styles.inputSearch} />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={styles.searchBtn}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
