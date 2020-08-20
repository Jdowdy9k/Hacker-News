import types from '../types'
import { Map, fromJS } from 'immutable';

const initialState = Map ({
    searchResults: []
});

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.setSearchResults: {
            console.log(action)
            return state.merge({
                searchResults: fromJS(action.results)
            });
        }
        default: {
            return state;
        }
    }
};

export default SearchReducer;