import { Link } from "react-router-dom";
import "../styles/PokemonCard.scss";

function PokemonCard({ pokemon }) {
  return (
    <>
      <Link to={`pokemon/${pokemon.name}`}>
        <section className="pokemonCard">
          <h1># {pokemon.id}</h1>
          <h2 className="pokemonName">{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemonImg"
          />
        </section>
      </Link>
    </>
  );
}

export default PokemonCard;
