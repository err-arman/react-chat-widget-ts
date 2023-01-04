import { createSlice } from '@reduxjs/toolkit'
import { BehaviorState, QuickButtonsState, QuickButtonTypes } from '@/types/StoreTypes';
import { createQuickButton } from '@/utils/messages';

const initialState = {
    quickButtons: []
  };

export const quickButtonSlice = createSlice({
    name: 'quickButton',
    initialState: initialState,
    reducers: {
        setQuickButtons: (state: QuickButtonsState, action) => {
            const { buttons } = action.payload;
            ({ quickButtons: [...buttons.map((button: QuickButtonTypes) => createQuickButton(button))] })
        },
    }
})

export const { setQuickButtons } = quickButtonSlice.actions

export default quickButtonSlice.reducer