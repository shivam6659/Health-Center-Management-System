import { call, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../actionTypes';
import { URL } from "../../constants/constant";
import config from "../../api/config";
import Api from "../../api/api";


export const getOtpApi = params => {
    return Api.post(
        `${URL}${config.endpoint.sendOtp}`,
        null,
        null,
        params
    );
};

function* getOtp({ onSuccess, onFailure, params }) {
    try {
        const res = yield call(getOtpApi, params);

        if (res?.status == 200 && res?.data) {
            console.log("SDFJFSKDFSDFSD ",res)
        } else {
            onFailure(res)
        }
    } catch (error) {
        const { message: statusMessage } = error.response || {};
        const payload = {
            message: statusMessage || error.message,
        };
        onFailure(err)
    }
}

function* authSaga() {
    yield takeEvery(actionTypes.GET_OTP, getOtp)
}

export default authSaga
