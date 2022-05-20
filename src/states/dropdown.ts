import { atom } from 'recoil'
import { IDisease } from 'types/disease'

export const dropdownOpenState = atom({
  key: 'dropdownOpenState',
  default: false,
})

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
