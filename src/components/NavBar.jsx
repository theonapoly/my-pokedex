function Navbar({
  pokemonList,
  handleClickPrev,
  handleClickNext,
  pokemonIndex,
}) {
  //state (état, données)

  //comportements (dynamique)

  //affichage (render)
  return (
    <nav>
      {pokemonIndex > 0 && <button onClick={handleClickPrev}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
      )}
    </nav>
  );
}

export default Navbar;
