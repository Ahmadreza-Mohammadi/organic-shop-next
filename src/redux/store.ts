import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./reducers/register";

const combinedReducers = combineReducers({
  counter: counterReducer,
});

const persistedReducers = persistReducer(
  {
    key: "test",
    storage,
    whitelist: ["counter"],
  },
  combinedReducers
);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
