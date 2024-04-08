import {setupListeners} from "@reduxjs/toolkit/query";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    },

});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;