import { createSlice } from '@reduxjs/toolkit'
import { BehaviorState, FullscreenPreviewState } from '@/types/StoreTypes';

const initialState = {
    src: '',
    alt: '',
    width: 0,
    height: 0,
    visible: false
};

export const fullScreenPreviewSlice = createSlice({
    name: 'behavior',
    initialState: initialState,
    reducers: {
        openFullScreenPreview: (state: FullscreenPreviewState, { payload }) => {
            const { src, width, height, alt } = payload
            return { ...state, src, width, height, visible: true, alt }
        },

        closeFullScreenPreview: (state: FullscreenPreviewState) => ({ ...initialState }),
    }
})

export const { openFullScreenPreview, closeFullScreenPreview } = fullScreenPreviewSlice.actions

export default fullScreenPreviewSlice.reducer