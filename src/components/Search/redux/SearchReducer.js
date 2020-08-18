import types from '../types'
import { Map, fromJS, Collection } from 'immutable';

const initialState = Map ({
    searchResults: []
});

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.addSearchResults: {
            return state.merge( Collection, {
                searchResults: action.results
            });
        }
        default: {
            return state;
        }
    }
};

export default SearchReducer;