const Pokemon = ({ pokemon, language }) => {
  return (
    <li className="pokemonContainer">
      <img src={pokemon.image} alt={pokemon.name.english} />
      <ul className="pokemonData">
        <li>ID: {pokemon.id}</li>
        <li>Name: {pokemon.name[language]}</li>
        <li>
          <ul className="type">
            {pokemon.type.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </li>
        <li>HP: {pokemon.base.HP}</li>
        <li>Attack: {pokemon.base.Attack}</li>
      </ul>
    </li>
  );
};

export default Pokemon;
