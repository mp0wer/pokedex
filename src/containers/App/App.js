import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import PokemonList from '../PokemonList/PokemonList';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';
import ErrorHandler from '../ErrorHandler/ErrorHandler';

class App extends Component {
    render() {
        return (
            <div className="app">
                <ErrorHandler/>
                <Header/>
                <div className='grid-container'>
                    <Search/>
                    <Filter/>
                    <PokemonList/>
                    <Pagination/>
                </div>
                <Loader/>
            </div>
        );
    }
}

export default App;
