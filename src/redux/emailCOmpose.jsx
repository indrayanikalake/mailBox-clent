import { createSlice } from "@reduxjs/toolkit";

const emailCOmposeSlice = createSlice({
    name:'email',
    initialState:{
        email:[],
    },
    reducers:{
        setEmail(state, action){
            state.email = action.payload;
        },
        addEmail(state, action){
            Object.keys(state.email).unshift(action.payload);
         },
         deleteEmail(state, action){
           state.email = Object.keys(state.email).filter((mail) =>mail.id !== action.payload);
          },
    }
});

export const { setEmail, addEmail, deleteEmail } = emailCOmposeSlice.actions;
const emailCOmposeSliceReducer = emailCOmposeSlice.reducer;
export default emailCOmposeSliceReducer;