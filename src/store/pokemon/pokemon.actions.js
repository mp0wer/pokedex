import {createAction} from 'redux-actions';

export const fetchPokemonList = createAction('POKEMON_LIST_REQUEST');
export const fetchPokemonListSuccess = createAction('POKEMON_LIST_SUCCESS');
export const fetchPokemonDetailsSuccess = createAction('POKEMON_DETAIL_SUCCESS');
export const fetchPokemonTypeList = createAction('POKEMON_TYPE_LIST_REQUEST');
export const fetchPokemonTypeListSuccess = createAction('POKEMON_TYPE_LIST_SUCCESS');
export const fetchPokemonTypeDetailsSuccess = createAction('POKEMON_TYPE_DETAIL_SUCCESS');