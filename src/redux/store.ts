import { configureStore } from '@reduxjs/toolkit'
import behaviorSlice from './slices/behaviorSlice'
import counterSlice from './slices/counterSlice'
import fullScreenPreviewSlice from './slices/fullScreenPreviewSlice'
import messagesSlice from './slices/messagesSlice'
import quickButtonSlice from './slices/quickButtonSlice'

export default configureStore({
  reducer: {
    // test slice
    counter: counterSlice,

    behavior: behaviorSlice,
    fullScreenPreview: fullScreenPreviewSlice,
    messages: messagesSlice,
    quickButton: quickButtonSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})