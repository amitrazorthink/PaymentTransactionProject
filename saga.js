/* global fetch */

import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes,
         saveTransactionError, 
        saveTransactionSuccess, 
        getTransactionSuccess,
        getTransactionError,
        } from './actions'

es6promise.polyfill()

function * transactionSaga ({ payload }) {
  console.log('I am in create Saga')
  try {
    const res = yield fetch('http://localhost:3000/rest/create', {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = yield res.json();
    yield put(saveTransactionSuccess(data))
  } catch (err) {
    yield put(saveTransactionError(err))
  }
}


function * transactionDetailsSaga () {
  try {
    const res = yield fetch('http://localhost:3000/rest/transactions', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = yield res.json();
    yield put(getTransactionSuccess(data))
  } catch (err) {
    yield put(getTransactionError(err))
  }
}


function * rootSaga () {
  yield all([
    takeLatest(actionTypes.ACTION_SAVE_TRANSACTION, transactionSaga),
    takeEvery(actionTypes.ACTION_GET_TRANSACTION, transactionDetailsSaga)
  ])
}

export default rootSaga
