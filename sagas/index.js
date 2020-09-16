import {put, takeLatest, all} from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
  yield put({type: 'NEWS_RECEIVED', payload: json});
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
