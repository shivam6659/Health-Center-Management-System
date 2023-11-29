import { call, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../actionTypes';
import { URL } from "../../constants/constant";
import config from "../../api/config";
import Api from "../../api/api";


export const getUserData = params => {
    return Api.get(
        `${URL}${config.endpoint.getUserList}`,
        null,
        null,
        null
    );
};

function* loadDataSaga({ onSuccess, onFailure, params }) {
    try {
        const res = yield call(getUserData, params);
        if (res?.status == 200 && res?.data) {
            onSuccess(res?.data);
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

function* homeSaga() {
    yield takeEvery(actionTypes.HOME_DATA, loadDataSaga)
}

export default homeSaga
