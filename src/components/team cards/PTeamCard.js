import React from "react";
import styled from "styled-components";
import "../../styles/App.css";

function PTeamCard({ data: { name, img, pokemon } }) {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;

    height: 400px;
  `;
  console.log(name);
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
    <>
      <Container>
        <h3>{name}</h3>
        <img src={img} alt="" style={{ height: "100px" }} />
        {pokemon.map((pMon) => {
          return (
            <div>
              <span>{pMon}</span>
            </div>
          );
        })}
      </Container>
    </>
  );
}

export default PTeamCard;
