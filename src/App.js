import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";
import Characters from "./Components/Characters/Characters";
import Filters from "./Components/Filters/Filters";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import useDebouncedFunction from "./hooks/useDebouncedFunction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterSingle from "./Components/CharacterSingle/CharacterSingle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterSingle />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [lastPage, setLastPage] = useState();

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;

  const handleSearch = useDebouncedFunction((e) => {
    setPage(1);
    setSearch(e.target.value);
  }, 500);

  useEffect(() => {
    const hasLikesInLocalStorage =
      localStorage.getItem("likedCharsIds") &&
      Array.isArray(JSON.parse(localStorage.getItem("likedCharsIds")));
    if (hasLikesInLocalStorage) {
      return;
    }
    localStorage.setItem("likedCharsIds", JSON.stringify([]));
  }, []);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(api);
        const likedCharsIds = JSON.parse(localStorage.getItem("likedCharsIds"));
        setInfo(res.data.info);
        setLastPage(res.data.info.pages);
        if (likedCharsIds.length > 0) {
          return setCharacters(
            res.data.results.map((character) => {
              if (likedCharsIds.includes(character.id)) {
                return {
                  ...character,
                  like: true,
                };
              }
              return {
                ...character,
                like: false,
              };
            })
          );
        }
        setCharacters(
          res.data.results.map((charLike) => {
            return { ...charLike, like: false };
          })
        );
      } catch (e) {
        console.error(e);
        setCharacters([]);
      }
    };
    getCharacters();
  }, [api]);

  const updateLikeListInLs = (id) => {
    const likedCharsIds = JSON.parse(localStorage.getItem("likedCharsIds"));
    if (likedCharsIds.includes(id)) {
      return localStorage.setItem(
        "likedCharsIds",
        JSON.stringify(likedCharsIds.filter((charId) => charId !== id))
      );
    }
    likedCharsIds.push(id);
    localStorage.setItem("likedCharsIds", JSON.stringify(likedCharsIds));
  };
  const updatedCharsLikeProperty = (id) => {
    const updatedCharacters = characters.map((character) => {
      if (character.id === id) {
        return { ...character, like: !character.like };
      }
      return character;
    });
    setCharacters(updatedCharacters);
    updateLikeListInLs(id);
  };

  return (
    <div className="App">
      <h1 className="projectName">Rick and Morty</h1>
      <Search search={search} setPage={setPage} onSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {characters.length !== 0 ? (
              <Characters
                handleLike={updatedCharsLikeProperty}
                characters={characters}
              />
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      </div>
      <Pagination
        lastPage={lastPage}
        page={page}
        info={info}
        setPage={setPage}
      />
    </div>
  );
};

export default App;
