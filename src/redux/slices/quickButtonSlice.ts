import { createSlice } from '@reduxjs/toolkit'
import { BehaviorState, QuickButtonsState, QuickButtonTypes } from '@/types/StoreTypes';
import { createQuickButton } from '@/utils/messages';

const initialState: {
    quickButtons: any[]
} = {
    quickButtons: []
};

export const quickButtonSlice = createSlice({
    name: 'quickButton',
    initialState: initialState,
    reducers: {
        setQuickButtons: (_: QuickButtonsState, action) => {
            console.log("quick button payload", action)
            const { buttons } = action.payload;
            return ({ quickButtons: [...buttons.map((button: QuickButtonTypes) => createQuickButton(button))] })
        },
    }
})

export const { setQuickButtons } = quickButtonSlice.actions

export default quickButtonSlice.reducer