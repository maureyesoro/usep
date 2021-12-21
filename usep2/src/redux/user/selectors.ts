import { createSelector } from "reselect";
import { rootState } from "../reducer";
import { userState } from "./types";

const userSelector = (state: rootState) => state.user;
export const userInfoSelector = createSelector(userSelector, (userState: userState) => userState.info);
export const userTokenSelector = createSelector(userInfoSelector, (info) => info.token);
export const userRefreshTokenSelector = createSelector(userInfoSelector, (info) => info.refreshToken);
export const userUsernameSelector = createSelector(userInfoSelector, (info) => info.username);
