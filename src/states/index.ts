import { configureStore } from '@reduxjs/toolkit'

import dropdown from './dropdown'
import search from './search'
import modal from './modal'

export const store = configureStore({
  reducer: {
    dropdown,
    search,
    modal,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
