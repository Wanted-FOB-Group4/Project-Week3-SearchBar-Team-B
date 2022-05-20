import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface DropdownState {
  dropdownOpen: boolean
  focusedIndex: number
  isApiBlocked: boolean
}

const INITIAL_STATE: DropdownState = {
  dropdownOpen: false,
  focusedIndex: -1,
  isApiBlocked: false,
}

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: INITIAL_STATE,
  reducers: {
    setDropdownOpen: (state: DropdownState, action: PayloadAction<boolean>) => {
      state.dropdownOpen = action.payload
    },
    setFocusedIndex: (state: DropdownState, action: PayloadAction<number>) => {
      state.focusedIndex = action.payload
    },
    setIsApiBlocked: (state: DropdownState, action: PayloadAction<boolean>) => {
      state.isApiBlocked = action.payload
    },
  },
})

export const { setDropdownOpen, setFocusedIndex, setIsApiBlocked } = dropdownSlice.actions

export default dropdownSlice.reducer

export const getDropdownState = (state: RootState) => state.dropdown.dropdownOpen
export const getFocusedIndex = (state: RootState) => state.dropdown.focusedIndex
export const getIsApiBlocked = (state: RootState) => state.dropdown.isApiBlocked
