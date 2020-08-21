import types from './types';

export const getSearchResults = value => ({
    type: types.watchGetSearchResults,
    value
});

export const setSearchResults = results => ({
    type: types.setSearchResults,
    results
});

export const addSearchResults = saveResults => ({
    type: types.addSearchResults,
    saveResults
})