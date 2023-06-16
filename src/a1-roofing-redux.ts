
// iterable interface
// yield can only be called directly from the generator function that contains it
// It cannot be called from nested functions or from callbacks.

import { Action }                           from 'redux';
import { ThunkAction }                      from 'redux-thunk';
import { RootState, RootAction }            from '../../store';
import { Reducer, ActionCreator }           from "redux";

// Module Declaration Bindings to functions, objects, or primitive values.
export const UPDATE_ROOF = 'UPDATE_ROOF';

// < > Module Interface Declaration Object.
export interface roofState {
    page: string
}

// < > Module Interface Action Declaration Object, with Payload Function.
export interface setRoof extends Action<'UPDATE_ROOF'> { page: string };

// < > Merge Declarations to Combine Type Interfaces.
export type roofAction = setRoof ; 

// < > TypeScript Alias / Interface: Array Type Iterable. Immutable state context.
export type RoofResult = ThunkAction <void, RootState, undefined, roofAction>;

// Object Initializer Notation.
const start : roofState = {
    page: 'purchase-order'
  };
  
  // < > Typescript - Redux Reducer Function.
  export const roofing : Reducer <roofState, RootAction> = ( state = start, action ) => {
    switch ( action.type ) {

      case UPDATE_ROOF: return { ...state, page:              action.page };

      default:
        return state;
    }
  }

// LOAD PAGE
export const loadPage: ActionCreator<RoofResult> = (page: string) => async (dispatch) => {

  switch(page) {

    case 'primary-contract':
      import('./primary-contract');
      break;
    
    case 'sub-contract':
      import('./sub-contract');
      break;

    case 'purchase-order':
      import('./purchase-order');
      break;

    case 'warranty-contract':
      import('./warranty-contract');
      break;

    default:
      await import('./primary-contract');

  }
  dispatch(updatePage(page)); // Send Object instead of String
}

// UPDATE PAGE
const updatePage: ActionCreator<setRoof> = (page: string) => {
  return { type: UPDATE_ROOF, page };
}



