import {all} from "redux-saga/effects";
import { tramiteUnivSaga } from "./tramiteuniv/saga";
import { userSaga } from "./user/saga";


export function* rootSaga(){
    yield all([userSaga()]);
    yield all([tramiteUnivSaga()])
}