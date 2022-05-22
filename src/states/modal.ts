import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'states'

interface IModalItem {
  modalOpen: boolean
  title: string
}

interface IModalState {
  modalState: IModalItem
}

const INIT_MODAL: IModalState = {
  modalState: {
    modalOpen: false,
    title: '',
  },
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: INIT_MODAL,
  reducers: {
    setModalState: (state: IModalState, action: PayloadAction<IModalItem>) => {
      state.modalState = action.payload
    },
  },
})

export const { setModalState } = modalSlice.actions

export default modalSlice.reducer

// Selector

export const getModalState = (state: RootState): IModalItem => state.modal.modalState
