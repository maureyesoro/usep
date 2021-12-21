import {PUSH_LOADING, POP_LOADING, pushLoadingSuccess, popLoadingSuccess} from "./types";

export const pushLoading = (): pushLoadingSuccess => ({
    type: PUSH_LOADING,
})

export const popLoading = (): popLoadingSuccess => ({
    type: POP_LOADING,
})