declare global {
    interface Window {
        process?: Object;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
import { compose } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import { appAction, AppState } from './redux-general';
export interface RootState {
    app?: AppState;
}
export type RootAction = appAction;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    app: AppState;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[ThunkMiddleware<{
    app: AppState;
}, import("redux").AnyAction>, ThunkMiddleware<RootState, import("./redux-general").setPage>]>, import("redux").StoreEnhancer<import("pwa-helpers/lazy-reducer-enhancer").LazyStore, {}>[]>;
//# sourceMappingURL=store.d.ts.map