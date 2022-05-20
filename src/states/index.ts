import { configureStore } from '@reduxjs/toolkit'

import dropdown from './dropdown'

export const store = configureStore({
  reducer: {
    dropdown,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
