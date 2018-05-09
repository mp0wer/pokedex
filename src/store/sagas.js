import {call, put, takeEvery, all, select} from 'redux-saga/effects'
import * as api from '../api';
import * as pokemonActions from './pokemon/pokemon.actions';
import * as uiActions from './ui/ui.actions';
import * as selectors from './selectors';

function* fetchPokemonDetails(idOrName) {
    const pokemonEntities = yield select(selectors.getPokemonEntities);
    if (!pokemonEntities[idOrName]) {
        try {
            const pokemon = yield call(api.fetchPokemonDetails, idOrName);
            yield put(pokemonActions.fetchPokemonDetailsSuccess(pokemon))
        } catch (e) {
            yield put(uiActions.setError(e));
        }
    }
}

function* fetchPokemonListDetails() {
    const pokemonNames = yield select(selectors.getPokemonNameListToShow);
    yield all(
        pokemonNames.map(pokemonName => {
            return call(fetchPokemonDetails, pokemonName);
        })
    )
}

function* fetchPokemonList() {
    yield put(uiActions.setLoading(true));
    try {
        const pokemonList = yield call(api.fetchPokemonList);
        yield put(pokemonActions.fetchPokemonListSuccess(pokemonList));
        yield put(uiActions.setLoading(false));
        yield call(fetchPokemonListDetails)
    } catch (e) {
        yield put(uiActions.setLoading(false));
        yield put(uiActions.setError(e));
    }
}

function* fetchPokemonTypeList() {
    try {
        const pokemonTypes = yield call(api.fetchPokemonTypeList);
        yield put(pokemonActions.fetchPokemonTypeListSuccess(pokemonTypes));
    } catch (e) {
        yield put(uiActions.setLoading(false));
        yield put(uiActions.setError(e));
    }
}

function* fetchPokemonTypeDetails(action) {
    const pokemonType = action.payload;
    yield put(uiActions.setError(null));
    if (!pokemonType) {
        yield put(uiActions.setPage(1));
        return;
    }
    const pokemonNamesByType = yield select(selectors.getPokemonNamesByType);
    if (!pokemonNamesByType[pokemonType]) {
        yield put(uiActions.setLoading(true));
        try {
            const pokemonTypeDetails = yield call(api.fetchPokemonTypeDetails, pokemonType);
            yield put(pokemonActions.fetchPokemonTypeDetailsSuccess(pokemonTypeDetails));
            yield put(uiActions.setLoading(false));
        } catch (e) {
            yield put(uiActions.setLoading(false));
            yield put(uiActions.setError(e));
        }
    }
    yield put(uiActions.setPage(1));
}

function* search() {
    yield put(uiActions.setPage(1));
}


function* saga() {
    yield takeEvery(pokemonActions.fetchPokemonList, fetchPokemonList);
    yield takeEvery(pokemonActions.fetchPokemonTypeList, fetchPokemonTypeList);
    yield takeEvery(uiActions.setCurrentType, fetchPokemonTypeDetails);
    yield takeEvery(uiActions.setPage, fetchPokemonListDetails);
    yield takeEvery(uiActions.setShowBy, fetchPokemonListDetails);
    yield takeEvery(uiActions.setSearchText, search);
}

export default saga;