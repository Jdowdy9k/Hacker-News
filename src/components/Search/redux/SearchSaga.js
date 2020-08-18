import types from '../types'
import { takeLatest, put } from 'redux-saga/effects';
import { setSearchResults } from '../action';
import axios from 'axios';

function* setSearch(e) {
    try{
        const api = 'http://hn.algolia.com/api/v1/search?query='+ e.target.value ;
        const data = yield axios.get(api);
        console.log(data.data.hits)
    return yield put(setSearchResults(data.data.hits));
    } catch(e) {
        console.log(e)
    }
}

function* watchSearch() {
    yield takeLatest(types.watchGetSearchResults, setSearch)
}

export default watchSearch;