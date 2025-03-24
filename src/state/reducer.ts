import {
  ActionType,
  AppActions,
  SetChairColor,
  SetChairMaterial,
  SetLegsMaterial,
  SetPillowColor,
} from "./actions";
import { AppState, ChairItem } from "./state";

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case ActionType.SetChairColor:
      return { ...state, chairColor: action.payload };

    case ActionType.SetChairMaterial:
      return { ...state, chairMaterial: action.payload };

    case ActionType.SetPillowColor:
      return { ...state, pillowColor: action.payload };

    case ActionType.SetLegsMaterial:
      return { ...state, legsMaterial: action.payload };

    default:
      return state;
  }
}

export const setChairColor = (chair: ChairItem): SetChairColor => {
  return {
    type: ActionType.SetChairColor,
    payload: chair,
  };
};

export const setChairMaterial = (material: ChairItem): SetChairMaterial => {
  return {
    type: ActionType.SetChairMaterial,
    payload: material,
  };
};

export const setPillowColor = (pillowColor: ChairItem): SetPillowColor => {
  return {
    type: ActionType.SetPillowColor,
    payload: pillowColor,
  };
};

export const setLegsMaterial = (material: ChairItem): SetLegsMaterial => {
  return {
    type: ActionType.SetLegsMaterial,
    payload: material,
  };
};
