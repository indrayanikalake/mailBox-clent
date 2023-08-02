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
            Object.keys(state.email).push(action.payload);
        }
    }
});

export const { setEmail, addEmail } = emailCOmposeSlice.actions;
const emailCOmposeSliceReducer = emailCOmposeSlice.reducer;
export default emailCOmposeSliceReducer;