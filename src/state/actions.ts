import { ChairItem } from "./state";

export enum ActionType {
  SetChairColor,
  SetChairMaterial,
  SetPillowColor,
  SetLegsMaterial,
}

export interface SetChairColor {
  type: ActionType.SetChairColor;
  payload: ChairItem;
}

export interface SetChairMaterial {
  type: ActionType.SetChairMaterial;
  payload: ChairItem;
}

export interface SetPillowColor {
  type: ActionType.SetPillowColor;
  payload: ChairItem;
}

export interface SetLegsMaterial {
  type: ActionType.SetLegsMaterial;
  payload: ChairItem;
}

export type AppActions =
  | SetChairColor
  | SetChairMaterial
  | SetPillowColor
  | SetLegsMaterial;
