import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import paymentsReducer from './payments/payments.reducer';
import groupsReducer from './groups/groups.reducer';

const paymentsPersistConfig = {
  key: 'payment',
  storage: localForage,
};

// const groupsPersistConfig = {
//   key: 'groups',
//   storage,
// };

const rootReducer = persistReducer(
  paymentsPersistConfig,
  combineReducers({
    payments: paymentsReducer,
    groups: groupsReducer,
  })
);

const middleware = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof store.getState>;
