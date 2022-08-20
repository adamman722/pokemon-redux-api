import "./styles/App.css";
import { useGetAllPokemonByNameQuery } from "./services/api/pokemon";
import { Outlet } from "react-router-dom";
import { listOfTrainers } from "./trainerList";

function App() {
  const { data, error, isLoading } = useGetAllPokemonByNameQuery("bulbasaur");

  // console.log(data);
  // console.log(error);
  // console.log(isLoading);
  //below is how we are going to import sprites
  //<img src={listOfTrainers[0].img} alt="" />
  const trainerSprites = listOfTrainers.map((trainer) => {
    return <img src={trainer.img} alt="" />;
  });
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
