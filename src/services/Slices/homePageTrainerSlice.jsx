import { createSlice } from "@reduxjs/toolkit";
import trainer4 from "../../images/Trainer Sprites/Spr_DP_Cynthia.webp";
import trainer18 from "../../images/Trainer Sprites/Spr_RS_Wallace.webp";
import trainer19 from "../../images/Trainer Sprites/Spr_BW_Alder.webp";
import trainer20 from "../../images/Trainer Sprites/600px-Spr_Masters_Acerola_Fall_2020.png";
import trainer21 from "../../images/Trainer Sprites/240px-Spr_Masters_Allister.webp";
import trainer22 from "../../images/Trainer Sprites/240px-Spr_Masters_N_2.png";
import trainer23 from "../../images/Trainer Sprites/240px-Spr_Masters_Blue_Sygna_2.webp";
import trainer24 from "../../images/Trainer Sprites/600px-Spr_Masters_Sonia_Special_Costume_2.png";

const initialState = {
  value: [
    {
      trainerId: 1,
      name: "Cynthia",
      img: trainer4,
      pokemon: [
        {
          name: "Spiritomb",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
        },
        {
          name: "Porygon-z",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
        },
        {
          name: "Togekiss",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
        },
        {
          name: "Lucario",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
        },
        {
          name: "Milotic",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        },
        {
          name: "Garchomp",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
        },
      ],
    },
    {
      trainerId: 2,
      name: "Wallace",
      img: trainer18,
      pokemon: [
        {
          name: "Wailord",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
        },
        {
          name: "Tentacruel",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        },
        {
          name: "Ludicolo",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
        },
        {
          name: "Whiscash",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
        },
        {
          name: "Gyarados",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        },
        {
          name: "Milotic",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        },
      ],
    },
    {
      trainerId: 3,
      name: "Alder",
      img: trainer19,
      pokemon: [
        {
          name: "Accelgor",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
        },
        {
          name: "Bouffalant",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
        },
        {
          name: "Druddigon",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
        },
        {
          name: "Vanilluxe",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
        },
        {
          name: "Escavalier",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
        },
        {
          name: "Volcarona",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
        },
      ],
    },
    {
      trainerId: 4,
      name: "Acerola",
      img: trainer20,
      pokemon: [
        {
          name: "Banette",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
        },
        {
          name: "Drifblim",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
        },
        {
          name: "Dhelmise",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
        },
        {
          name: "Froslass",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
        },
        {
          name: "Palossand",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
        },
        {
          name: "Mimikyu-disguised",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
        },
      ],
    },
    {
      trainerId: 5,
      name: "Allister",
      img: trainer21,
      pokemon: [
        {
          name: "Dusknoir",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
        },
        {
          name: "Chandelure",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
        },
        {
          name: "Cursola",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
        },
        {
          name: "Runerigus",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
        },
        {
          name: "Gengar",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        },
        {
          name: "Polteageist",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
        },
      ],
    },
    {
      trainerId: 6,
      name: "N",
      img: trainer22,
      pokemon: [
        {
          name: "Zekrom",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
        },
        {
          name: "Carracosta",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
        },
        {
          name: "Vanilluxe",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
        },
        {
          name: "Archeops",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
        },
        {
          name: "Zoroark",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
        },
        {
          name: "Klinklang",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
        },
      ],
    },
    {
      trainerId: 7,
      name: "Adam",
      img: trainer23,
      pokemon: [
        {
          name: "Metagross",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/376.png",
        },
        {
          name: "Scizor",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
        },
        {
          name: "Jolteon",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        },
        {
          name: "Rotom",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
        },
        {
          name: "Aegislash",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
        },
        {
          name: "Yamper",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
        },
      ],
    },
    {
      trainerId: 8,
      name: "Sgae",
      img: trainer24,
      pokemon: [
        {
          name: "Hatterene",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
        },
        {
          name: "Gothitelle",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
        },
        {
          name: "Rapidash-galar",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",
        },
        {
          name: "Chandelure",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
        },
        {
          name: "Starmie",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        },
        {
          name: "Sylveon",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
        },
      ],
    },
  ],
};

export const homePageTrainerSlice = createSlice({
  name: "homePageTrainer",
  initialState,
  reducers: {
    addToTrainers: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export const { addToTrainers } = homePageTrainerSlice.actions;

export default homePageTrainerSlice.reducer;
