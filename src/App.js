import "./App.css";
import { useGetAllPokemonByNameQuery } from "./services/api/pokemon";

function App() {
  const { data, error, isLoading } = useGetAllPokemonByNameQuery("bulbasaur");

  console.log(data);
  console.log(error);
  console.log(isLoading);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
