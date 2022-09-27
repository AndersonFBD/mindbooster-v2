import { configureStore} from "@reduxjs/toolkit";
import idUsuarioReducer from "./slices/idUsuarioSlice";

export const store = configureStore({
    reducer: {
        userID: idUsuarioReducer
    },
});