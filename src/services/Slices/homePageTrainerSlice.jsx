import { createSlice } from "@reduxjs/toolkit";
import trainer4 from "../../images/Trainer Sprites/Spr_DP_Cynthia.webp";
import trainer18 from "../../images/Trainer Sprites/Spr_RS_Wallace.webp";
import trainer19 from "../../images/Trainer Sprites/Spr_BW_Alder.webp";
import trainer20 from "../../images/Trainer Sprites/600px-Spr_Masters_Acerola_Fall_2020.png";
import trainer21 from "../../images/Trainer Sprites/240px-Spr_Masters_Allister.webp";
import trainer22 from "../../images/Trainer Sprites/240px-Spr_Masters_N_2.png";
import trainer23 from "../../images/Trainer Sprites/240px-Spr_Masters_Blue_Sygna_2.webp";

const initialState = {
  value: [
    {
      name: "Cynthia",
      img: trainer4,
      pokemon: [
        "spiritomb",
        "porygon-z",
        "togekiss",
        "lucario",
        "milotic",
        "garchomp",
      ],
    },
    {
      name: "Wallace",
      img: trainer18,
      pokemon: [
        "wailord",
        "tentacruel",
        "ludicolo",
        "whiscash",
        "gyarados",
        "milotic",
      ],
    },
    {
      name: "Alder",
      img: trainer19,
      pokemon: [
        "accelgor",
        "bouffalant",
        "druddigon",
        "vanilluxe",
        "escavalier",
        "volcarona",
      ],
    },
    {
      name: "Acerola",
      img: trainer20,
      pokemon: [
        "banette",
        "drifblim",
        "dhelmise",
        "froslass",
        "palossand",
        "mimikyu-disguised",
      ],
    },
    {
      name: "Allister",
      img: trainer21,
      pokemon: [
        "dusknoir",
        "chandelure",
        "cursola",
        "runerigus",
        "gengar",
        "polteageist",
      ],
    },
    {
      name: "N",
      img: trainer22,
      pokemon: [
        "zekrom",
        "carracosta",
        "vanilluxe",
        "archeops",
        "zoroark",
        "klinklang",
      ],
    },
    {
      name: "Adam",
      img: trainer23,
      pokemon: [
        "scizor",
        "metagross",
        "jolteon",
        "rotom",
        "aegislash",
        "yamper",
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
