// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemonByName: builder.query({
      query: () => `pokemon?limit=100000&offset=0`,
    }),
  }),
});

export const singlePokemonApiCall = createApi({
  reducerPath: " singlePokemonApiCall",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
//example :
//  use + getPokemonByName + Query
export const { useGetAllPokemonByNameQuery } = pokemonApi;
export const { useGetPokemonByNameQuery } = singlePokemonApiCall;
