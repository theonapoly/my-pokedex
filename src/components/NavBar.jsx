function Navbar({ pokemonList, pokemonIndex, handlePokeChange, pokemon }) {
  //state (état, données)

  //comportements (dynamique)

  //affichage (render)
  return (
    <nav>
      {pokemonList.map((poke, index) => (
        <button key={index} onClick={() => handlePokeChange(index)}>
          {poke.name}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
