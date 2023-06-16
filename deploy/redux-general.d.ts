import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, RootAction } from './store';
import { Reducer, ActionCreator } from "redux";
export declare const UPDATE_PAGE = "UPDATE_PAGE";
export interface AppState {
    page: string;
}
export interface setPage extends Action<'UPDATE_PAGE'> {
    page: string;
}
export type appAction = setPage;
export type ThunkResult = ThunkAction<void, RootState, undefined, appAction>;
export declare const app: Reducer<AppState, RootAction>;
export declare const loadPage: ActionCreator<ThunkResult>;
//# sourceMappingURL=redux-general.d.ts.map