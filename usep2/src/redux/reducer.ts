import { combineReducers } from 'redux';
import { tramiteUnivReducer } from './tramiteuniv/reducer';
import { tramiteState } from './tramiteuniv/types';
import { uiReducer } from './ui/reducer';
import { uiState } from './ui/types';
import { userReducer } from './user/reducer';
import { userState } from "./user/types";



export type rootState = {
    user: userState;
    ui: uiState;
    tramiteuniv: tramiteState;
}

export const rootReducer = combineReducers<rootState>({
    user: userReducer,
    ui: uiReducer,
    tramiteuniv: tramiteUnivReducer,

});