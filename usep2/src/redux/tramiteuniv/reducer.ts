import { Reducer } from "redux";
import { tramiteUnivAction, tramiteState, UPDATE_TRAMITE_SUCCESS, UPDATE_TRAMITE_REQUEST } from "./types";

export const initialState: tramiteState = {
    pending: false,
    tramiteuniv_info: {},
    error: null,
};

export const tramiteUnivReducer: Reducer<tramiteState, tramiteUnivAction> = (
    state: tramiteState = initialState,
    action: tramiteUnivAction
): tramiteState => {
    switch (action.type) {
        case UPDATE_TRAMITE_SUCCESS:
            return {
                ...state,
                pending: false,
                tramiteuniv_info: action.payload,
            };
        case UPDATE_TRAMITE_REQUEST:
            return {
                ...state,
                pending: true,
                tramiteuniv_info: action.payload,
            };
        default:
            return state
    }
}