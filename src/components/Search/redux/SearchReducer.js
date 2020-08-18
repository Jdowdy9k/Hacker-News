import types from './types'
import { Map, fromJS } from 'immutable';

const initialState = Map ({
    searchResults: []
});

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.addSearchResults: {
            return state.merge( collections: {
                searchResults: action.results
            });
        }
        default: {
            return state;
        }
    }
};

export default SearchReducer;