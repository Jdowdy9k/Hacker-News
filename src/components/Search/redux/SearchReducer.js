import types from '../types'
import { Map, fromJS, Collection } from 'immutable';

const initialState = Map ({
    searchResults: []
});

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.setSearchResults: {
            console.log(action)
            return state.merge( Collection, {
                searchResults: fromJS(action.results)
            });
        }
        default: {
            return state;
        }
    }
};

export default SearchReducer;