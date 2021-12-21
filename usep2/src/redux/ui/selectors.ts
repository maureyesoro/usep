import { rootState } from "../reducer";
import { createSelector } from "reselect";


const uiSelector = (state: rootState) => state.ui;

export const loadingSelector = createSelector(
    uiSelector,
     (ui) =>ui.loading.length > 0
);