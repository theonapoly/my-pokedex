function PokemonCard() {
  //state (état)

  //comportements (dynamique)
  const pokemon = pokemonList[0];

  //affichage (render)
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>????</p>
        )}
        <figcaption>
          <h1>{pokemon.name}</h1>
        </figcaption>
      </figure>
    </div>
  );
}

// données
const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

export default PokemonCard;
