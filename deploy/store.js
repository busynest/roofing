import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import { app } from './redux-general';
export const store = configureStore({
    reducer: {
        app
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV == 'production',
    enhancers: [lazyReducerEnhancer(combineReducers)],
});
//# sourceMappingURL=store.js.map