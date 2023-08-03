import {createSlice } from '@reduxjs/toolkit';

const MailSlice = createSlice({
    name:'mail',
    initialState:{
        sentMessageIsOpen :false,
        selectedValue: null,
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
        }
    }
});

export const { openSentMessage, closeSentMessage, openMessage } = MailSlice.actions;
const mailSliceReducer = MailSlice.reducer;
export default mailSliceReducer;