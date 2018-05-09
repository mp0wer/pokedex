import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import {reducer as pokemon} from './pokemon/pokemon.reducer';
import {reducer as ui} from './ui/ui.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        pokemon,
        ui
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

export default store;