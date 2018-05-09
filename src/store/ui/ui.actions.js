import {createAction} from 'redux-actions';

export const setCurrentType = createAction('UI_SET_TYPE');
export const setPage = createAction('UI_SET_PAGE');
export const setShowBy = createAction('UI_SET_SHOW_BY');
export const setSearchText = createAction('UI_SET_SEARCH_TEXT');
export const setLoading = createAction('UI_SET_LOADING');
export const setError = createAction('UI_SET_ERROR');