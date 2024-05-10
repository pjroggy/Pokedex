const FetchPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon data");
    }
    return await response.json();
  } catch (error) {
    console.error("error fetching PokemonData", error);
    throw error;
  }
};

export default FetchPokemonData;
