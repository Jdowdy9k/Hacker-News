import types from '../types'
import { put, takeEvery, takeLatest} from 'redux-saga/effects';
import { setSearchResults } from '../action';
import axios from 'axios';

function* setSearch({ value }) {
    try{
        const api = 'http://hn.algolia.com/api/v1/search?query='+ value  ;
        const data = yield axios.get(api);
        return yield put(setSearchResults(data.data.hits));
    } catch(e) {
    }
}

function* watchSearch() {
    yield takeLatest(types.watchGetSearchResults, setSearch)
}



export default watchSearch;