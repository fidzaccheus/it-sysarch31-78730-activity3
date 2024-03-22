import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  const handleLangUpdate = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className="languageButtons">
        <button onClick={() => handleLangUpdate("english")}>English</button>
        <button onClick={() => handleLangUpdate("japanese")}>Japanese</button>
        <button onClick={() => handleLangUpdate("chinese")}>Chinese</button>
        <button onClick={() => handleLangUpdate("french")}>French</button>
      </div>
      <ul className="pokedex">
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} language={language} />
        ))}
      </ul>
    </>
  );
};

export default Pokedex;
