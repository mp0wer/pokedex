import {connect} from 'react-redux';

import Filter from '../../components/Filter/Filter';
import * as pokemonActions from '../../store/pokemon/pokemon.actions';
import * as uiActions from '../../store/ui/ui.actions';
import * as selectors from '../../store/selectors';


const mapStateToProps = (state) => {
    return {
        types: selectors.getPokemonTypes(state),
        current: selectors.getCurrentType(state)
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchTypes: () => dispatch(pokemonActions.fetchPokemonTypeList()),
        onSelect: (text) => dispatch(uiActions.setCurrentType(text))
    }
};


const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer;