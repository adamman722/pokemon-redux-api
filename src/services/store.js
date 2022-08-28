import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi, singlePokemonApiCall } from "./api/pokemon";
import homePageTrainerReducer from "./Slices/home page trainers/homePageTrainerSlice";
import UserSliceReducer from "./Slices/Users/UserSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [singlePokemonApiCall.reducerPath]: singlePokemonApiCall.reducer,
    homePageTrainer: homePageTrainerReducer,
    users: UserSliceReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(pokemonApi.middleware),
});
