import { IBioInitialState, IBioPersonalQuestions, IBioFavoriteColors, IBioIsSubmitted } from "../context/BioContext";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export enum Types {
  ADD_PERSONAL_QUESTIONS = "ADD_PERSONAL_QUESTIONS",
  ADD_FAVORITE_COLORS = "ADD_FAVORITE_COLORS",
  IS_SUBMITTED = "IS_SUBMITTED",
}

type BioPayload = {
  [Types.ADD_PERSONAL_QUESTIONS]: IBioPersonalQuestions;
  [Types.ADD_FAVORITE_COLORS]: IBioFavoriteColors;
  [Types.IS_SUBMITTED]: IBioIsSubmitted;
};

export type BioActions = ActionMap<BioPayload>[keyof ActionMap<BioPayload>];

export const bioReducer = (state: IBioInitialState, action: BioActions) => {
  switch (action.type) {
    case Types.ADD_PERSONAL_QUESTIONS:
      return {
        ...state,
        ...action.payload,
      };
    case Types.ADD_FAVORITE_COLORS:
      return {
        ...state,
        favoriteColors: action.payload.favoriteColors,
      };
    case Types.IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.payload.isSubmitted,
      };
    default:
      return state;
  }
};
