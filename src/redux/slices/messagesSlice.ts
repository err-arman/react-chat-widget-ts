import { createSlice } from '@reduxjs/toolkit'
import { BehaviorState, MessagesState } from '@/types/StoreTypes';
import { createComponentMessage, createLinkSnippet, createNewMessage } from '@/utils/messages';
import { MESSAGE_SENDER } from 'constants';

const initialState = {
    messages: [],
    badgeCount: 0
};

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: initialState,
    reducers: {
        addNewUserMessage: (state, action) => {
            const { text, id } = action.payload;
            ({ ...state, messages: [...state.messages, createNewMessage(text, MESSAGE_SENDER.CLIENT, id)] })
        },

        addNewResponseMessage: (state: MessagesState, action) => {
            const { text, id } = action.payload;
            ({ ...state, messages: [...state.messages, createNewMessage(text, MESSAGE_SENDER.RESPONSE, id)], badgeCount: state.badgeCount + 1 })
        },

        addNewLinkSnippet: (state: MessagesState, action) => {
            const { link, id } = action.payload;
            ({ ...state, messages: [...state.messages, createLinkSnippet(link, id)] })
        },

        addComponentMessage: (state: MessagesState, action) => {
            const { component, props, showAvatar, id } = action.payload;
            ({ ...state, messages: [...state.messages, createComponentMessage(component, props, showAvatar, id)] })
        },

        dropMessage: (state: MessagesState, action) => {
            ({ ...state, messages: [] })
        },

        hideAvatar: (state: MessagesState, action) => {
            const { index } = action.payload;
            state.messages[index].showAvatar = false
        },

        deleteMessages: (state: MessagesState, action) => {
            const { count, id } = action.payload;
            ({
                ...state,
                messages: id
                    ? state.messages.filter((_, index) => {
                        const targetMsg = state.messages.findIndex(tMsg => tMsg.customId === id)
                        return index < targetMsg - count + 1 || index > targetMsg
                    })
                    : state.messages.slice(0, state.messages.length - count)
            })
        },

        setBadgeCount: (state: MessagesState, action) => {
            const { count } = action.payload;
            ({ ...state, badgeCount: count })
        },

        markAllRead: (state: MessagesState, action) => {
            ({ ...state, messages: state.messages.map(message => ({ ...message, unread: false })), badgeCount: 0 })
        }
    }
})

export const { addNewUserMessage, addComponentMessage, addNewLinkSnippet, addNewResponseMessage, deleteMessages, dropMessage, hideAvatar, markAllRead, setBadgeCount } = messagesSlice.actions

export default messagesSlice.reducer