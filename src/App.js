import "./styles/App.css";
import { useGetAllPokemonByNameQuery } from "./services/api/pokemon";
import { Outlet } from "react-router-dom";
import { listOfTrainers } from "./trainerList";
import PTeamCard from "./components/team cards/PTeamCard";
import { useSelector, useDispatch } from "react-redux";
import SlickAutoPlay from "./components/Slick Auto Play/SlickAutoPlay";
import Navbar from "./components/navbar/Navbar";

function App() {
  //we call this to get access to the redux api
  // const { data, error, isLoading } = useGetAllPokemonByNameQuery();

  const homePageTrainers = useSelector((state) => state.homePageTrainer.value);

  // console.log(data);
  // console.log(error);
  // console.log(isLoading);
  // console.log(homePageTrainers);

  //below is how we are going to import sprites
  //<img src={listOfTrainers[0].img} alt="" />
  const trainerSprites = listOfTrainers.map((trainer) => {
    return <img src={trainer.img} alt="" />;
  });

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
