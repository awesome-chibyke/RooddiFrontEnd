import { applyMiddleware, createStore } from "redux";
//import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//const store = createStore(persistedReducer, applyMiddleware(logger));
export const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
));


export const persistedStore = persistStore(store);
