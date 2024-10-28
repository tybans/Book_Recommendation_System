import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';
import reducers from './reducers';

// const store = createStore(reducers, applyMiddleware(thunk));

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],  // Thunk middleware for async actions
  });

export default store;
