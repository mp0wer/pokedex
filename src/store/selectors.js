import {createSelector} from 'reselect';

import * as pokemonSelectors from './pokemon/pokemon.selectors';
import * as uiSelectors from './ui/ui.selectors';

export * from './pokemon/pokemon.selectors';
export * from './ui/ui.selectors';

export const getPokemonNameList = createSelector(
    pokemonSelectors.getPokemonNames,
    pokemonSelectors.getPokemonNamesByType,
    uiSelectors.getCurrentType,
    (names, namesByType, type) => {
        if (type) {
            return namesByType[type] || [];
        }
        return names;
    }
);

export const getPokemonNameListWithSearch = createSelector(
    getPokemonNameList,
    uiSelectors.getSearch,
    (names, search) => {
        if (search) {
            const regex = new RegExp(search, 'ig');
            return names.filter(name => regex.test(name));
        }
        return names;
    }
);

export const getTotalPages = createSelector(
    getPokemonNameListWithSearch,
    uiSelectors.getShowBy,
    (names, showBy) => {
        return showBy ? Math.ceil(names.length / showBy) : 0;
    }
);

export const getPokemonNameListToShow = createSelector(
    getPokemonNameListWithSearch,
    uiSelectors.getShowBy,
    uiSelectors.getPage,
    (names, showBy, page) => {
        const startIndex = (page - 1) * showBy;
        const endIndex = startIndex + showBy;
        return names.slice(startIndex, endIndex);
    }
);

export const getPokemonSearchNotFound = createSelector(
    getPokemonNameListWithSearch,
    uiSelectors.getSearch,
    (names, search) => {
        return search && !names.length;
    }
);