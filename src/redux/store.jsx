import { configureStore } from "@reduxjs/toolkit";
import mailSliceReducer from "./MailSlice";
import emailCOmposeSliceReducer from "./emailCOmpose";
import emailSentSliceReducer from "./emailSentSlice";
import userSliceReducer from "./userSlice";

const store = configureStore({
    reducer:{
        mail : mailSliceReducer,
        email : emailCOmposeSliceReducer,
        emailSent: emailSentSliceReducer,
        user: userSliceReducer,
    }
});
export default store;