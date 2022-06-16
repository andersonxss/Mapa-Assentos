import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { setAutoFreeze } from "immer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import seatsReducer from "./Seats.store";
import usersReducer from "./Users.store";

const reducers = combineReducers({
  seats: seatsReducer,
  users: usersReducer,
});
setAutoFreeze(false);
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["seats", "users"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

let persistor = persistStore(store);

export { store, persistor };
