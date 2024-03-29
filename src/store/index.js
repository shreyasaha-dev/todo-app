import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import todoReducer from "./reducer/TodoReducer";
const rootReducer = combineReducers({
  todo: todoReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
