const Pokemon = ({ pokemon, language }) => {
  return (
    <li className="pokemonContainer">
      <ul>
        <li>
          <img loading="lazy" src={pokemon.image} alt={pokemon.name.english} />
        </li>
        <li className="pokemonName">
          [{pokemon.id}] {pokemon.name[language]}
        </li>
        <li>
          <ul className="pokemonType">
            {pokemon.type.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </li>
        <ul className="columned">
          <li>HP: {pokemon.base.HP}</li>
          <li>Attk: {pokemon.base.Attack}</li>
          <li>Def: {pokemon.base.Defense}</li>
          <li>Speed: {pokemon.base.Speed}</li>
          <li>Sp. Attack: {pokemon.base["Sp. Attack"]}</li>
          <li>Sp. Defense: {pokemon.base["Sp. Defense"]}</li>
        </ul>
      </ul>
    </li>
  );
};

export default Pokemon;
