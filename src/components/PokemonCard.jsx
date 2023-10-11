function PokemonCard({ pokemon }) {
  console.log(pokemon);
  //state (état)

  //comportements (dynamique)

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

export default PokemonCard;
