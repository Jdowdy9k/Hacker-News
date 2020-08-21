import types from '../types'
import { Map, fromJS } from 'immutable';

const initialState = Map({
    searchResults: [],
    history: [1,2,3]
});

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setSearchResults: {
            console.log(action)
            return state.merge({
                searchResults: fromJS(action.results)
            });
        }
        case types.addSearchResults: {
            return state.merge({
                history: fromJS(action.terms)
            })
        }
        default: {
            return state;
        }
    }
};



export default rootReducer;