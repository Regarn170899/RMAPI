import axios from "axios";
import './App.css';
import {useEffect, useState} from "react";
import Characters from "./Components/Characters";
function App() {
  const [characters,setCharacters]=useState([])
  const [loading, setLoading]=useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const [charactersOnPage]=useState(10)
  useEffect(()=>{
    // testing pull pull request
    const getCharacters=async ()=>{
      setLoading(true)
      try {
        const res= await axios.get("https://rickandmortyapi.com/api/character")
        setCharacters(res.data.results)
        setLoading(false)
      } catch (e) {
        console.error(e);
        return [];
      }
    }
    getCharacters()

  },[])
  return (
    <div className="App">
      <div className='container'>
        <Characters characters={characters} loading={loading}/>
      </div>

    </div>
  );
}

export default App;
