import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PokemonList from "./pages/PokemonList";
import FetchPokemonData from "./components/FetchPokemonData";
import PokemonDetail from "./pages/PokemonDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: async () => {
      const pokemonList = await FetchPokemonData(
        "https://pokeapi.co/api/v2/pokemon/"
      );
      const pokemonUrls = pokemonList.results.map((pokemon) => pokemon.url);
      const pokemonDetails = await Promise.all(
        pokemonUrls.map(FetchPokemonData)
      );
      console.info(pokemonList)
      return { pokemonList, pokemonDetails };
    },
    id: "app",
    children: [
      {
        path: "/",
        element: <PokemonList />,
      },
      {
        path: "/pokemon/:pokemonName",
        element: <PokemonDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
