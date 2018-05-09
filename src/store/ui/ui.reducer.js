import {handleActions} from 'redux-actions';

import * as actions from './ui.actions';

const initialState = {
    page: 1,
    showBy: 10,
    type: null,
    search: null,
    loading: false,
    error: null
};

export const reducer = handleActions({
    [actions.setShowBy]: (state, action) => {
        return {
            ...state,
            showBy: action.payload
        }
    },
    [actions.setPage]: (state, action) => {
        return {
            ...state,
            page: action.payload
        }
    },
    [actions.setCurrentType]: (state, action) => {
        return {
            ...state,
            type: action.payload
        }
    },
    [actions.setSearchText]: (state, action) => {
        return {
            ...state,
            search: action.payload
        }
    },
    [actions.setLoading]: (state, action) => {
        return {
            ...state,
            loading: action.payload
        }
    },
    [actions.setError]: (state, action) => {
        return {
            ...state,
            error: action.payload
        }
    },
}, initialState);