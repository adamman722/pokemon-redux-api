import "./styles/App.css";
import { useGetAllPokemonByNameQuery } from "./services/api/pokemon";
import { Outlet } from "react-router-dom";

function App() {
  const { data, error, isLoading } = useGetAllPokemonByNameQuery("bulbasaur");

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
