import * as actionTypes from "../actionTypes";

export const getSellerListData = ({
    request,
    onSuccess = res => { },
    onFailure = res => { } }) => ({
        type: actionTypes.GET_SELLER_DATA,
        params: request,
        onSuccess: onSuccess,
        onFailure: onFailure
    })