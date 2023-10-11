import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
