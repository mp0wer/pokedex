import React, {Component} from 'react';
import './Header.scss';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">Pokedex</h1>
            </header>
        );
    }
}

export default Header;