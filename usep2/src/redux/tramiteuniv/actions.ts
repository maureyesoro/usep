import { TramiteUniv } from "../../models/tramiteuniv/types";
import {
    UPDATE_TRAMITE_SUCCESS,
    updateTramiteSuccess,
    updateTramiteRequest,
    UPDATE_TRAMITE_REQUEST,
} from "./types";


export const updateTramitesSuccess = (uTramite: Partial<TramiteUniv>): updateTramiteSuccess => ({
    type: UPDATE_TRAMITE_SUCCESS,
    payload: uTramite
})
export const updateTramitesRequest = (uTramite: Partial<TramiteUniv>): updateTramiteRequest => ({
    type: UPDATE_TRAMITE_REQUEST,
    payload: uTramite
})