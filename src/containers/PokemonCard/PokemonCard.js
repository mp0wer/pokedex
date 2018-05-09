import {connect} from 'react-redux';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import * as selectors from '../../store/selectors';


const mapStateToProps = (state, {name}) => {
    return {
        pokemon: selectors.getPokemonEntities(state)[name]
    }
};

const PokemonCardContainer = connect(
    mapStateToProps,
)(PokemonCard);

export default PokemonCardContainer;