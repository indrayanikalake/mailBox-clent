import {createSlice } from '@reduxjs/toolkit';

const MailSlice = createSlice({
    name:'mail',
    initialState:{
        sentMessageIsOpen :false,
        selectedValue: null,
        seenMessage: false,
        sent:false,
    },
    reducers:{
        openSentMessage(state){
          state.sentMessageIsOpen = true;
        },
        closeSentMessage(state){
            state.sentMessageIsOpen = false;
        },
        openMessage(state, action){
           state.selectedValue = action.payload;
        },
        seenMessageTrue(state){
            state.seenMessage = true;
        },
        seenMessageFalse(state){
            state.seenMessage = False;
        },
        openSent(state){
            state.sent = true;
        },
        closeSent(state){
            state.sent = false;
        }
    }
});

export const { openSentMessage, closeSentMessage, openMessage,
 seenMessageTrue, seenMessageFalse, openSent, closeSent } = MailSlice.actions;
const mailSliceReducer = MailSlice.reducer;
export default mailSliceReducer;