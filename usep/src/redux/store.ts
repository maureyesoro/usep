import { persistStore, persistReducer } from 'redux-persist'
import {rootReducer} from './reducer';
import storage from 'redux-persist/lib/storage';
import {createStore, Store} from 'redux';


// https://www.npmjs.com/package/redux-persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
    blacklist: [],
}

export const configStore = () => {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(
        persistedReducer
    );
    const persistor = persistStore(store);
    return {store, persistor};
}