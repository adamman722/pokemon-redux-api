import React from "react";
import styled from "styled-components";

function PTeamCard(props) {
  const Container = styled.div``;

  const pokemonData = props.fetchedPokemon.map((pokemon) => {
    return (
      <>
        {" "}
        <li>{pokemon.name}</li>
        <li>
          <img src={pokemon.sprites.front_default} alt="" />
        </li>
      </>
    );
  });
  return (
    <>
      <Container></Container>
    </>
  );
}

export default PTeamCard;
