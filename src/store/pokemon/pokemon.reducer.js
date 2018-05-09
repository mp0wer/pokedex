import {handleActions} from 'redux-actions';

import * as actions from './pokemon.actions';
import {Pokemon} from '../../models';

const initialState = {
    names: [],
    types: [],
    namesByType: {},
    entities: {}
};

export const reducer = handleActions({
    [actions.fetchPokemonListSuccess]: (state, action) => {
        const names = action.payload.results.map(item => item.name);
        return {
            ...state,
            names,
        };
    },
    [actions.fetchPokemonDetailsSuccess]: (state, action) => {
        const pokemon = new Pokemon(action.payload);
        return {
            ...state,
            entities: {
                ...state.entities,
                [pokemon.name]: pokemon
            }
        };
    },
    [actions.fetchPokemonTypeListSuccess]: (state, action) => {
        const types = action.payload.results.map(item => item.name);
        return {
            ...state,
            types,
        };
    },
    [actions.fetchPokemonTypeDetailsSuccess]: (state, action) => {
        const type = action.payload.name;
        const pokemonNames = action.payload.pokemon.map(item => item.pokemon.name);
        return {
            ...state,
            namesByType: {
                ...state.namesByType,
                [type]: pokemonNames
            },
        };
    },
}, initialState);