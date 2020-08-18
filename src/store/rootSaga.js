import SearchSaga from '../components/Search/redux/SearchSaga';
import { fork, all, effectTypes } from 'redux-saga/effects';

function* RootSaga() {
    yield all ( effectTypes, [
        fork(SearchSaga)
    ])
}

export default RootSaga;