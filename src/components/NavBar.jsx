function Navbar({ pokemonList, pokemonIndex, handlePokeChange, pokemon }) {
  //state (état, données)

  //comportements (dynamique)
  const handleClickPika = () => {
    alert("Pika Pika Chuuuu!!");
  };

  //   const isPikachu = pokemonList[pokemonIndex].name === "Pikachu";

  //affichage (render)
  return (
    <nav>
      {pokemonList.map((poke, index) => (
        <button
          key={index}
          onClick={() => {
            handlePokeChange(index);
            poke.name === "Pikachu" && handleClickPika();
          }}
        >
          {poke.name}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
