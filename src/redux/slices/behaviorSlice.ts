import { createSlice } from '@reduxjs/toolkit'
import { BehaviorState } from '@/types/StoreTypes';

export const behaviorSlice = createSlice({
    name: 'behavior',
    initialState: {
        showChat: false,
        disabledInput: false,
        messageLoader: false
    },
    reducers: {
        toggleChat: (state: BehaviorState) => ({ ...state, showChat: !state.showChat}),
        toggleInputDissabled: (state: BehaviorState) => ({ ...state, disabledInput: !state.disabledInput }),
        toggleMessageLoader: (state: BehaviorState) => {
            return ({ ...state, messageLoader: !state.messageLoader })
        }
    }
})

export const { toggleChat, toggleInputDissabled, toggleMessageLoader } = behaviorSlice.actions

export default behaviorSlice.reducer