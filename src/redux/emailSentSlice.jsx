import { createSlice } from "@reduxjs/toolkit";


const emailSentSlice = createSlice({
    name:'emailSent',
    initialState:{
        emailSent: [],
    },
    reducers:{
        setSentEmail(state, action){
            state.emailSent = action.payload;
        }
    }
});
export const { setSentEmail } = emailSentSlice.actions;
const emailSentSliceReducer = emailSentSlice.reducer;
export default emailSentSliceReducer;