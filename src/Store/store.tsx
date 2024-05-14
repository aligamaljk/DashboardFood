import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  userSlice  from './user/UserSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const darkPresistConfig = {
    key: 'dark',
    storage,
    whitelist: ['dark'],
}

const rootReducer = combineReducers({
  user: persistReducer(darkPresistConfig, userSlice),
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export default store




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
