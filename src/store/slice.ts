import { createSlice } from '@reduxjs/toolkit';

interface ISliceState {
  species: {
    data: any[] | null;
    isFetching: boolean;
  };
  characters: {
    data: any[] | null;
    isFetching: boolean;
  };
  character: {
    data: any | null;
    isFetching: boolean;
  };
}

export const initialState: ISliceState = {
  species: {
    data: null,
    isFetching: false,
  },
  characters: {
    data: null,
    isFetching: false,
  },
  character: {
    data: null,
    isFetching: false,
  },
};

const slice = createSlice({
  name: 'Star Wars data',
  initialState,
  reducers: {
    setSpeciesState: (state, action) => {
      state.species = { ...state.species, ...action.payload };
    },
    setCharactersState: (state, action) => {
      state.characters = { ...state.characters, ...action.payload };
    },
    setCharacterState: (state, action) => {
      state.character = { ...state.character, ...action.payload };
    },
    fetchSpeciesAction: (state, action) => {},
    fetchCharactersAction: (state, action) => {},
    fetchCharacterAction: (state, action) => {},
  },
});

export const {
  setSpeciesState,
  setCharactersState,
  setCharacterState,
  fetchSpeciesAction,
  fetchCharactersAction,
  fetchCharacterAction,
} = slice.actions;

export default slice.reducer;
