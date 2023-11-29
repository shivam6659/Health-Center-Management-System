import * as actionTypes from "../actionTypes";
export function increment() {
    return { type: actionTypes.INCREMENT }
}

export function decrement() {
    return { type: actionTypes.DECREMENT }
}

export function resetData() {
    return { type: actionTypes.RESET }
}

export const getHomeDetails = ({
    request,
    onSuccess = res => { },
    onFailure = res => { } }) => ({
        type: actionTypes.HOME_DATA,
        params: request,
        onSuccess: onSuccess,
        onFailure: onFailure
    })