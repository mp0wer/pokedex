import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Search.scss';


class Search extends Component {
    static propTypes = {
        onSearch: PropTypes.func,
    };

    constructor(...props) {
        super(...props);
        this.state = {
            search: ''
        };
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    render() {
        const {search} = this.state;
        return (
            <div className="search">
                <form onSubmit={this.handleSearch}>
                    <div className="grid-x align-middle">
                        <div className="cell medium-auto">
                            <input type="text" placeholder="Search by name"
                                   value={search}
                                   onChange={this.handleChangeSearch}/>
                        </div>
                        <div className="cell medium-shrink">
                            <button className="button primary expanded">Find</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    handleSearch(e) {
        e.preventDefault();
        const {onSearch} = this.props;
        const {search} = this.state;
        if (onSearch) {
            onSearch(search);
        }
    }

    handleChangeSearch(e) {
        this.setState({
            search: e.target.value
        });
    }

}

export default Search;