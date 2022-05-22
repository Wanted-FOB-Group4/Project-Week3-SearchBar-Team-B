import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface SearchState {
  inputValue: string
  searchValue: string
}

const INITIAL_STATE: SearchState = {
  inputValue: '',
  searchValue: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    setInputValue: (state: SearchState, action: PayloadAction<string>) => {
      state.inputValue = action.payload
    },
    setSearchValue: (state: SearchState, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
  },
})

export const { setInputValue, setSearchValue } = searchSlice.actions

export default searchSlice.reducer

export const getInputValue = (state: RootState) => state.search.inputValue
export const getSearchValue = (state: RootState) => state.search.searchValue
