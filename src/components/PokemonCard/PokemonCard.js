import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Pokemon} from '../../models';
import './PokemonCard.scss';


class PokemonCard extends Component {
    static propTypes = {
        pokemon: PropTypes.instanceOf(Pokemon)
    };

    render() {
        const {pokemon} = this.props;
        return (
            <div className="pokemon-card">
                <div className={`pokemon-card__container ${!pokemon ? 'pokemon-card__container--loading' : ''}`}>
                    <div className="grid-x grid-margin-x align-middle">
                        <div className="cell medium-1 small-5">
                            {this.renderAvatar()}
                        </div>
                        <div className="cell medium-auto small-7">
                            {this.renderDetails()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderAvatar() {
        const {pokemon} = this.props;
        if (pokemon) {
            return <div className="pokemon-card__avatar" style={{backgroundImage: `url(${pokemon.avatar})`}}></div>
        }
        return <div className="pokemon-card__avatar"></div>
    }

    renderDetails() {
        const {pokemon} = this.props;
        if (!pokemon) {
            return null;
        }
        return (
            <div className="pokemon-card__details">
                <div className="grid-x grid-margin-x">
                    <div className="cell medium-3"><strong
                        className="show-for-small-only">Name:&nbsp;</strong>{pokemon.name}</div>
                    <div className="cell medium-3"><strong
                        className="show-for-small-only">Types:&nbsp;</strong>{pokemon.types.join(', ')}</div>
                    <div className="cell medium-3"><strong
                        className="show-for-small-only">Abilities:&nbsp;</strong>{pokemon.abilities.join(', ')}</div>
                    <div className="cell medium-3"><strong
                        className="show-for-small-only">Forms:&nbsp;</strong>{pokemon.forms.join(', ')}</div>
                </div>
            </div>
        )
    }
}

export default PokemonCard;