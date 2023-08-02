import { configureStore } from "@reduxjs/toolkit";
import mailSliceReducer from "./MailSlice";
import emailCOmposeSliceReducer from "./emailCOmpose";

const store = configureStore({
    reducer:{
        mail : mailSliceReducer,
        email : emailCOmposeSliceReducer,
    }
});
export default store;