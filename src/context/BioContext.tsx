import React, { createContext, useReducer, useContext } from "react";
import { bioReducer, BioActions } from "../reducers/BioReducer";

export interface IBioPersonalQuestions {
  firstName: string;
  lastName: string;
  isFromPortugal: boolean;
}

export interface IBioFavoriteColors {
  favoriteColors: string[];
}

export interface IBioIsSubmitted {
  isSubmitted: boolean;
}

export interface IBioInitialState extends IBioPersonalQuestions, IBioFavoriteColors, IBioIsSubmitted {}

interface IContextProvider {
  children: React.ReactNode;
}

export const initialState: IBioInitialState = {
  firstName: "",
  lastName: "",
  isFromPortugal: true,
  favoriteColors: [],
  isSubmitted: false,
};

export const BioContext = createContext<{ state: IBioInitialState; dispatch: React.Dispatch<BioActions> }>({
  state: initialState,
  dispatch: () => null,
});

export default function BioProvider({ children }: IContextProvider) {
  const [state, dispatch] = useReducer(bioReducer, initialState);

  return <BioContext.Provider value={{ state, dispatch }}>{children}</BioContext.Provider>;
}

export function useBio() {
  const context = useContext(BioContext);
  if (!context) throw new Error("useBio must be used within a BioProvider.");
  const { state, dispatch } = context;

  return { state, dispatch };
}