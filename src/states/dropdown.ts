import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface DropdownState {
  dropdownOpen: boolean
  focusedIndex: number
  isApiBlocked: boolean
  category: string
}

const INITIAL_STATE: DropdownState = {
  dropdownOpen: false,
  focusedIndex: -1,
  isApiBlocked: false,
  category: 'searchLog',
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
    setCategory: (state: DropdownState, action: PayloadAction<string>) => {
      state.category = action.payload
    },
  },
})

export const { setDropdownOpen, setFocusedIndex, setIsApiBlocked, setCategory } = dropdownSlice.actions

export default dropdownSlice.reducer

export const getDropdownState = (state: RootState) => state.dropdown.dropdownOpen
export const getFocusedIndex = (state: RootState) => state.dropdown.focusedIndex
export const getIsApiBlocked = (state: RootState) => state.dropdown.isApiBlocked
export const getCategory = (state: RootState) => state.dropdown.category
