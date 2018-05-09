import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as pokemonActions from '../../store/pokemon/pokemon.actions';
import * as selectors from '../../store/selectors';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.scss';


class PokemonList extends Component {
    componentDidMount() {
        const {fetchPokemonList} = this.props;
        if (fetchPokemonList) {
            fetchPokemonList();
        }
    }

    render() {
        const {pokemonNameList} = this.props;
        return (
            <div className="pokemon-list">
                {this.renderHeader()}
                {this.renderNotFound()}
                {pokemonNameList.map(pokemonName => {
                    return <PokemonCard key={pokemonName} name={pokemonName}/>
                })}
            </div>
        )
    }

    renderHeader() {
        const {notFound} = this.props;
        if (notFound) {
            return null;
        }
        return (
            <div className="pokemon-list__header">
                <div className="grid-x grid-margin-x show-for-medium">
                    <div className="cell medium-1">Avatar</div>
                    <div className="cell medium-auto">
                        <div className="grid-x grid-margin-x">
                            <div className="cell medium-3">Name</div>
                            <div className="cell medium-3">Types</div>
                            <div className="cell medium-3">Abilities</div>
                            <div className="cell medium-3">Forms</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderNotFound() {
        const {notFound} = this.props;
        if (notFound) {
            return <div className="pokemon-list__not-found">Pokemon not found.</div>
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        pokemonNameList: selectors.getPokemonNameListToShow(state),
        notFound: selectors.getPokemonSearchNotFound(state),
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemonList: () => dispatch(pokemonActions.fetchPokemonList())
    }
};


const PokemonListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonList);

export default PokemonListContainer;