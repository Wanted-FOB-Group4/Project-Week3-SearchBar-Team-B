import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { IDisease } from 'types/disease'

interface DropdownState {
  dropdownOpen: boolean
  data: IDisease[]
  focusedIndex: number
}

const INITIAL_STATE: DropdownState = {
  dropdownOpen: false,
  data: [],
  focusedIndex: -1,
}

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: INITIAL_STATE,
  reducers: {
    setDropdownOpen: (state: DropdownState, action: PayloadAction<boolean>) => {
      state.dropdownOpen = action.payload
    },
    setData: (state: DropdownState, action: PayloadAction<IDisease[]>) => {
      state.data = action.payload
    },
    setFocusedIndex: (state: DropdownState, action: PayloadAction<number>) => {
      state.focusedIndex = action.payload
    },
  },
})

export const { setDropdownOpen, setData, setFocusedIndex } = dropdownSlice.actions

export default dropdownSlice.reducer

export const getDropdownState = (state: RootState) => state.dropdown.dropdownOpen
export const getData = (state: RootState) => state.dropdown.data
export const getFocusedIndex = (state: RootState) => state.dropdown.focusedIndex
