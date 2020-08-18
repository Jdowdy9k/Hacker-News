import { combineReducers } from 'redux';
import SearchReducer from '../components/Search/redux/SearchReducer'


export default combineReducers( reducers: {
    search: SearchReducer
});