import { fork, all } from "redux-saga/effects";
import homeSaga from "./homeSaga";
import sellerSaga from "./sellerSaga";
import authSaga from "./authSaga";
export default function* rootSaga() {
    yield all([
        fork(homeSaga),
        fork(sellerSaga),
        fork(authSaga)
    ])
}