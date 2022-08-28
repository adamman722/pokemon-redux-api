import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 99999999, userName: "Admin", password: "test" }];

const stupidLargeNumber = 1000000000;

let newId = () => {
  let someIdNumber = Math.floor(Math.random() * stupidLargeNumber);
  const locatedIdNumber = initialState.find((user) => user.id === someIdNumber);
  while (locatedIdNumber === someIdNumber) {
    someIdNumber = Math.floor(Math.random() * stupidLargeNumber);
  }
  return someIdNumber;
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state = [
        ...state,
        {
          id: newId,
          userName: payload.name,
          password: payload.password,
          chosenSprite: payload.selectedSprite,
          backgroundHeroImage: payload.backgroundHeroImage,
          pokemonTeam: [],
        },
      ];
    },
    addNewPokemon: (state, { payload }) => {
      //need to check outside to see if the team is full or not 8/27/22 11pm
      const foundUser = state.find((user) => user.id === payload.id);
      const positionOfUser = state.indexOf((user) => user.id === foundUser.id);
      // I want pokemon to be an object containing all data of pokemon
      foundUser.pokemonTeam.push(payload.pokemon);

      state[positionOfUser] = foundUser;
    },
    //TODO: add the delete reducer in here will do at a later time
  },
});

export const { createUser, addNewPokemon } = UserSlice.actions;

export default UserSlice.reducer;
