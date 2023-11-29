import * as actionTypes from "../actionTypes";

export const getOtp = ({
    request,
    onSuccess = res => { },
    onFailure = res => { } }) => ({
        type: actionTypes.GET_OTP,
        params: request,
        onSuccess: onSuccess,
        onFailure: onFailure
    })