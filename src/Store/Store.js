import { configureStore } from "@reduxjs/toolkit";  
import { TokenSlice, UserDataApi } from "./apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
const Store = configureStore({
    reducer: {
        [UserDataApi.reducerPath]: UserDataApi.reducer,
        tokenSlice : TokenSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UserDataApi.middleware)
}) 
setupListeners(Store.dispatch)
export default Store;