import {all, call, put, takeEvery} from "redux-saga/effects";
import {TramiteUniv} from "../../models/tramiteuniv/types"
import { updateTramiteUniv } from "../../services/univ/services";
// import { popLoading, pushLoading } from "../ui/actions";
import { popLoadingSuccess, pushLoadingSuccess } from "../ui/types";
import { updateTramitesSuccess } from "./actions";
import { UPDATE_TRAMITE_REQUEST, updateTramiteRequest, updateTramiteSuccess} from "./types"


function* updateSagaTramiteUniv(action: updateTramiteRequest) {
    try {
        // yield put<pushLoadingSuccess>(pushLoading());
        // const updatedProduct: Product = yield call(updateProduct(), action.payload);
        // yield put<updateProductSuccess>(
        //     updateProductsSuccess({
        //     ...updatedProduct
        //   })
        // );
      } catch (error) {
      } finally {
        // yield put<popLoadingSuccess>(popLoading());
      }
}

export function* tramiteUnivSaga() {
    yield takeEvery(UPDATE_TRAMITE_REQUEST, updateSagaTramiteUniv);
}