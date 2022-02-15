import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pokedex from "./../components/Pokedex"
import Details from "./../components/Details"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Pokedex />}
        />
        <Route
          path="details/:idPokemon"
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  )
}