import React from "react";
import styled from "styled-components";
import "../../styles/App.css";

function PTeamCard(props) {
  const Container = styled.div``;
  console.log(props);
  const pokemonData = props.data.results.map((pokemon) => {
    return (
      <>
        {" "}
        <li>{pokemon.name}</li>
      </>
    );
  });
  return (
    <>
      <Container>
        <ul>{pokemonData}</ul>
      </Container>
    </>
  );
}

export default PTeamCard;
