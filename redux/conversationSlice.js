import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversations: [],
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    getAllConversations: (state, action) => {
      state.conversations = action.payload;
    },
    createConversation: (state, action) => {
      state.conversations.push(action.payload);
    },
  },
});

export const { getAllConversations, createConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
