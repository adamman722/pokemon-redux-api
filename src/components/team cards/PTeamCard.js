import React from "react";
import styled from "styled-components";
import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import "../../styles/App.css";

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(240, 46, 169, 0.705);
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
  height: 350px;
  width: 36rem;
  margin-bottom: 20px;
  background-color: #181717;
`;
const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
  width: 38rem;
`;
//pokemon comes in as a array of objects
function PTeamCard({ data: { trainerId, name, img, pokemon } }) {
  //this was old but I want to keep it in
  //   const pokemonData = props.data.map((trainer) => {
  //     return (
  //       <div>
  //         {" "}
  //         <h3>{trainer.name}</h3>
  //       </div>
  //     );
  //   });

  return (
    <Container>
      <div style={{ display: "flex", width: "100%" }}>
        <h2 className="trainer-name">{name}</h2>
        <NavLink to={`/home/${trainerId}`}>Check Trainer</NavLink>
      </div>
      <img src={img} alt="" style={{ height: "100px" }} />
      <PokemonContainer>
        {pokemon.map((pMon) => {
          return (
            <div className="pokemon-itself">
              <span>{pMon.name}</span>
              <img src={pMon.img} alt="" />
            </div>
          );
        })}
      </PokemonContainer>
    </Container>
  );
}

export default PTeamCard;
