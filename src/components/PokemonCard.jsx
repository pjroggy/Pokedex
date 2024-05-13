import { Link } from "react-router-dom";
import "../styles/PokemonCard.scss";

function PokemonCard({ pokemon }) {
  return (
    <>
      <Link to={`pokemon/${pokemon.name}`}>
        <section className="pokemonCard">
          <h2># {pokemon.id}</h2>
          <div className="wrapper">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemonImg"
          />
          </div>
          <h2 className="pokemonName">{pokemon.name}</h2>
           <img
          src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`}
          alt={pokemon.name}
          className="pokemon3D"
        />
        </section>
      </Link>
    </>
  );
}

export default PokemonCard;
