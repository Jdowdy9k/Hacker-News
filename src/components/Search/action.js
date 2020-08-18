import types from './types';

export const getSearchResults = value => ({
    type: types.watchGetSearchResults,
    value
});