import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Pokemon from "./pages/Pokemon";
import PokemonList from "./pages/PokemonList";

function App() {
  return <>
  <PokemonList/>
  <Pokemon/>
  <PokemonCard/>
  </>;
}

export default App;
