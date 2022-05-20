import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface SystemState {
  searchText: string
}

const INITIAL_STATE: SystemState = {
  searchText: '',
}

const systemSlice = createSlice({
  name: 'system',
  initialState: INITIAL_STATE,
  reducers: {
    setSearchText: (state: SystemState, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
  },
})

export const { setSearchText } = systemSlice.actions

export default systemSlice.reducer

export const getSearchText = (state: RootState): string => state.system.searchText
