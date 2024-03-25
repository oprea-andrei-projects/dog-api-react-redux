import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// @ts-ignore
import dogBreedSlice from "./dog.reducers";

const store = configureStore({
    reducer: {
        dogBreedState: dogBreedSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;