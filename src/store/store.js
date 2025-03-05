
import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./reducer/alertReducer/alertReducer.js";
import loadingReducer from "./reducer/loadingReducer/loadingReducer.js";

let store = configureStore({
    reducer:{
        alertReducer,
        loadingReducer,
    },
    devTools: true,
});

export default store