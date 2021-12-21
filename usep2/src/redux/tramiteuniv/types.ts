import { Action } from "redux";
import { TramiteUniv } from "../../models/tramiteuniv/types";

export type tramiteState = {
    pending: boolean,
    tramiteuniv_info: {},
    error: null,
};
export const initialState = {
    tramiteuniv_info: {}
}


export const UPDATE_TRAMITE_SUCCESS = 'UPDATE_TRAMITE_SUCCESS';
export const UPDATE_TRAMITE_REQUEST = 'UPDATE_TRAMITE_REQUEST';

export interface updateTramiteSuccess extends Action {
    type: typeof UPDATE_TRAMITE_SUCCESS,
    payload: Partial<TramiteUniv>;
}

export interface updateTramiteRequest extends Action {
    type: typeof UPDATE_TRAMITE_REQUEST,
    payload: Partial<TramiteUniv>;
}

export type tramiteUnivAction = updateTramiteRequest | updateTramiteSuccess;
