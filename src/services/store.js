import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from "./api/pokemon";
import homePageTrainerReducer from "./Slices/homePageTrainerSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,

    homePageTrainer: homePageTrainerReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(pokemonApi.middleware),
});
