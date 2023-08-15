import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  let [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(data => setPokemon(data.data.results))
  },[]);

  return (
      <div className="App">
        {pokemon && pokemon.map((pokemon, index) => <p key={index}>{pokemon.name}</p>)}
      </div>
  );
}

export default App;
