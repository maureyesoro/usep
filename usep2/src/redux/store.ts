import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";
import { rootSaga } from "./saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["user", "tramiteuniv"],
    blacklist: ["ui"],
}

export const configStore = () => {
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(
        persistedReducer,
        composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));

    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return {store, persistor };
};