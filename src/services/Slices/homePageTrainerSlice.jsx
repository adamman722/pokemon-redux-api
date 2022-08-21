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
      name: "Cynthia",
      img: trainer4,
      pokemon: [
        "Spiritomb",
        "Porygon-z",
        "Togekiss",
        "Lucario",
        "Milotic",
        "Garchomp",
      ],
    },
    {
      name: "Wallace",
      img: trainer18,
      pokemon: [
        "Wailord",
        "Tentacruel",
        "Ludicolo",
        "Whiscash",
        "Gyarados",
        "Milotic",
      ],
    },
    {
      name: "Alder",
      img: trainer19,
      pokemon: [
        "Accelgor",
        "Bouffalant",
        "Druddigon",
        "Vanilluxe",
        "Escavalier",
        "Volcarona",
      ],
    },
    {
      name: "Acerola",
      img: trainer20,
      pokemon: [
        "Banette",
        "Drifblim",
        "Dhelmise",
        "Froslass",
        "Palossand",
        "Mimikyu-disguised",
      ],
    },
    {
      name: "Allister",
      img: trainer21,
      pokemon: [
        "Dusknoir",
        "Chandelure",
        "Cursola",
        "Runerigus",
        "Gengar",
        "Polteageist",
      ],
    },
    {
      name: "N",
      img: trainer22,
      pokemon: [
        "Zekrom",
        "Carracosta",
        "Vanilluxe",
        "Archeops",
        "Zoroark",
        "Klinklang",
      ],
    },
    {
      name: "Adam",
      img: trainer23,
      pokemon: [
        "Metagross",
        "Scizor",
        "Jolteon",
        "Rotom",
        "Aegislash",
        "Yamper",
      ],
    },
    {
      name: "Sgae",
      img: trainer24,
      pokemon: [
        "Hatterene",
        "Gothitelle",
        "Rapidash-galar",
        "Chandelure",
        "Starmie",
        "Sylveon",
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
