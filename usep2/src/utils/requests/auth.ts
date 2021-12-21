import {userTokenSelector} from "../../redux/user/selectors";
// import {store} from "../../index";
import {store} from "../..";

export const authorizationFetch = (
    input: RequestInfo,
    init?: RequestInit
): Promise<Response> =>
    fetch(input, {
        ...init,
        headers: {
            ...init?.headers,
            
            Authorization: `Bearer ${userTokenSelector(store.getState())}`,
        },
    });