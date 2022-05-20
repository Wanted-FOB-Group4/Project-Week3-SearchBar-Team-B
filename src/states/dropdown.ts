import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

// TODO: Remove Recoil
import { atom } from 'recoil'
import { IDisease } from 'types/disease'

interface DropdownState {
  dropdownOpen: boolean
}

const INITIAL_STATE: DropdownState = {
  dropdownOpen: false,
}

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: INITIAL_STATE,
  reducers: {
    setDropdownOpen: (state: DropdownState, action: PayloadAction<boolean>) => {
      state.dropdownOpen = action.payload
    },
  },
})

export const { setDropdownOpen } = dropdownSlice.actions

export default dropdownSlice.reducer

export const getDropdownState = (state: RootState) => state.dropdown.dropdownOpen

// TODO: Remove Recoil
// export const dropdownOpenState = atom({
//   key: 'dropdownOpenState',
//   default: false,
// })

export const inputValueState = atom({
  key: 'inputValueState',
  default: '',
})

export const searchKeywordState = atom({
  key: 'searchKeywordState',
  default: '',
})

export const searchResultState = atom<IDisease[]>({
  key: 'searchResultState',
  default: [],
})

export const focusedIndexState = atom({
  key: 'focusedIndexState',
  default: -1,
})
