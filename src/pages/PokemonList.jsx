import "../styles/PokemonList.scss";
import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import FetchPokemonData from "../components/FetchPokemonData";

function PokemonList() {
  const { pokemonList, pokemonDetails } = useRouteLoaderData("app");
  const [newPokemonList, setNewPokemonList] = useState(pokemonList);
  const [newPokemonDetails, setNewPokemonDetails] = useState(pokemonDetails);

  const handlePokemonClick = async (url) => {
    if (url)
      try {
        const dataList = await FetchPokemonData(url);
        setNewPokemonList(dataList);
        const dataDetails = await Promise.all(
          dataList.results.map((pokemon) => pokemon.url).map(FetchPokemonData)
        );
        setNewPokemonDetails(dataDetails);
      } catch (error) {
        console.error("error fetching Pokemon data : ", error);
      }
  };

  return (
    <>
      <section className="pokemonList">
        {newPokemonDetails && (
          <>
            {newPokemonDetails.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </>
        )}
      </section>
      {newPokemonList.previous && (
        <button
          type="button"
          className="previousButton"
          onClick={() => handlePokemonClick(newPokemonList.previous)}
        >
          Previous
        </button>
      )}
      {newPokemonList.next && (
        <button
          type="button"
          className="nextButton"
          onClick={() => handlePokemonClick(newPokemonList.next)}
        >
          Next
        </button>
      )}
    </>
  );
}

export default PokemonList;
