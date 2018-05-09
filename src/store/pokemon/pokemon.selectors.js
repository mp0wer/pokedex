import {createSelector} from 'reselect';

export const getPokemonNames = (state) => state.pokemon.names;
export const getPokemonEntities = (state) => state.pokemon.entities;
export const getPokemonTypes = (state) => state.pokemon.types;
export const getPokemonNamesByType = (state) => state.pokemon.namesByType;

export const getPokemonList = createSelector(
    getPokemonNames,
    getPokemonEntities,
    (names, entities) => {
        return names.map(name => entities[name] || {name});//.filter(pokemon => !!pokemon);
    }
);