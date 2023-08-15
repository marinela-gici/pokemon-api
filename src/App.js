import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  let [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => response.json())
        .then(data => setPokemon(data.results))
  },[]);

  return (
      <div className="App">
        {pokemon && pokemon.map((pokemon, index) => <p key={index}>{pokemon.name}</p>)}
      </div>
  );
}

export default App;
