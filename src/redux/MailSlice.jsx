import {createSlice } from '@reduxjs/toolkit';

const MailSlice = createSlice({
    name:'mail',
    initialState:{
        sentMessageIsOpen :false,
    },
    reducers:{
        openSentMessage(state){
          state.sentMessageIsOpen = true;
        },
        closeSentMessage(state){
            state.sentMessageIsOpen = false;
        }
    }
});

export const { openSentMessage, closeSentMessage } = MailSlice.actions;
const mailSliceReducer = MailSlice.reducer;
export default mailSliceReducer;