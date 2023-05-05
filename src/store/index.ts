import { configureStore } from '@reduxjs/toolkit'
import counter from './user/userSlice'
import settings from './settings/settingsSlice'


const store = configureStore({
  reducer: {
    counter,
    settings
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;