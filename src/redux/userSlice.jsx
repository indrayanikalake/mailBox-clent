import {createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'mail',
    initialState:{
        value:null,
    },
    reducers:{
       signIn(state, action){
          state.value= action.payload;
        },
        signOut(state){
            state.value = null;
        },
       
    }
});

export const { signIn, signOut } = userSlice.actions;
const userSliceReducer = userSlice.reducer;
export default userSliceReducer;