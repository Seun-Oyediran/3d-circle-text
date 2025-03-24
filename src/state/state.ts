import {
  legsMaterialOptions,
  pillowColorOptions,
  seatColorOptions,
  seatMaterialOptions,
} from "@/utils/static";

export interface AppState {
  chairColor: ChairItem;
  chairMaterial: ChairItem;
  pillowColor: ChairItem;
  legsMaterial: ChairItem;
}

export interface ChairItem {
  id: number;
  value: string;
  name: string;
  info: string;
}

export const initialAppState: AppState = {
  chairColor: seatColorOptions[0],
  chairMaterial: seatMaterialOptions[0],
  pillowColor: pillowColorOptions[0],
  legsMaterial: legsMaterialOptions[0],
};
