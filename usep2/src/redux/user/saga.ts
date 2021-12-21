import { takeEvery, call, put } from "@redux-saga/core/effects";
import {getInfoUser, login, logout, signin} from "../../services/user/services";
import {
  SIGNIN_REQUESTED,
  LOGIN_REQUESTED,
  userLoginRequested,
  userLoginSuccess,
  userSigninRequested,
  userSigninSuccess, userLogoutRequested, userLogoutSuccess, LOGOUT_REQUESTED,
} from "./types";
import { User } from "../../models/user/types";
import {loginSuccess, logoutSuccess, signinSuccess} from "./actions";
import {popLoading, pushLoading } from "../ui/actions";
import { popLoadingSuccess, pushLoadingSuccess } from "../ui/types";


function* fetchLogin(action: userLoginRequested) {
  try {
    yield put<pushLoadingSuccess>(pushLoading());
    const userTokens: User = yield call(login, action.payload);
    const infoUser: User = yield call(getInfoUser, action.payload);
    yield put<userLoginSuccess>(
      loginSuccess({
        ...userTokens,
        ...infoUser,
      })
    );
  } catch (error) {
  } finally {
    yield put<popLoadingSuccess>(popLoading());
  }
}

function* fetchSignIn(action: userSigninRequested) {
  try {
    yield put<pushLoadingSuccess>(pushLoading());
    const userTokens: User = yield call(signin, action.payload);
    const infoUser: User = yield call(getInfoUser, action.payload);
    yield put<userSigninSuccess>(
      signinSuccess({
        ...userTokens,
        ...infoUser,
      })
    );
  } catch (error) {
  } finally {
    yield put<popLoadingSuccess>(popLoading());
  }
}

function* fetchLogout(action: userLogoutRequested) {
  try {
    yield put<pushLoadingSuccess>(pushLoading());
    yield call(logout, action.payload);
    yield put<userLogoutSuccess>(logoutSuccess());
  } catch (error) {}
  finally{
    yield put<popLoadingSuccess>(popLoading());
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_REQUESTED, fetchLogin);
  yield takeEvery(SIGNIN_REQUESTED, fetchSignIn);
  yield takeEvery(LOGOUT_REQUESTED, fetchLogout);
}

