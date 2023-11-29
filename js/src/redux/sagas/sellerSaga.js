import { call, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../actionTypes';
import { URL } from "../../constants/constant";
import config from "../../api/config";
import Api from "../../api/api";


export const getSellerData = params => {
    return Api.get(
        `${URL}${config.endpoint.getSellerList}`,
        null,
        null,
        null
    );
};

function* sellersListData({ onSuccess, onFailure, params }) {
    try {
        const res = yield call(getSellerData, params);
       const result =res?.data;
        if (result?.status && result?.data) {
            onSuccess(result?.data);
        } else {
            onFailure(result)
        }
    } catch (error) {
        const { message: statusMessage } = error.response || {};
        const payload = {
            message: statusMessage || error.message,
        };
        onFailure(err)
    }
}

function* sellerSaga() {
    yield takeLatest(actionTypes.GET_SELLER_DATA, sellersListData)
}

export default sellerSaga
