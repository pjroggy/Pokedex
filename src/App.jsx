import { Outlet } from "react-router";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <nav>
      <Link to="/">Pokemons</Link>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  );
}

export default App;
