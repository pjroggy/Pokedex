import { useParams } from "react-router";
import "../styles/Pokemon.scss";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const { pokemonName } = useParams();
  const [pokemonDetails, setNewPokemonDetails] = useState("test");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setNewPokemonDetails(data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    },[]);

    if(isLoading){
      <p>Loading...</p>
    }
    return (
      <>
      <h1>Pokemon</h1>
      <section className="pokemonCardDetail">
        <h1 className="pokemonNameDetail">{pokemonDetails.name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
          alt={pokemonDetails.name}
          className="pokemonImgDetail"
        />
        <h2 className="abilitiesTitle">Abilities</h2>
        <ul className="abilities">
          {pokemonDetails.abilities && pokemonDetails.abilities.map((poke) => {
            return (
              <>
                <li>{poke.ability.name}</li>
              </>
            );
          })}
        </ul>

        <h2 className="baseStatsTitle">Base stats</h2>
        <ul className="baseStats">
          {pokemonDetails.stats && pokemonDetails.stats.map((poke) => {
            return (
              <>
                <li>{poke.stat.name}:</li>
              </>
            );
          })}
        </ul>
        <h2 className="typeTitle">Type</h2>
        <ul className="type">
          {pokemonDetails.types && pokemonDetails.types.map((poke)=>{
            return (
              <>
              <li>{poke.type.name}</li>
              </>
            )
          })}
        </ul>
      </section>
    </>
  );
}


export default PokemonDetail;
