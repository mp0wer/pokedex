import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';


class Filter extends Component {
    static propTypes = {
        types: PropTypes.arrayOf(PropTypes.string),
        current: PropTypes.string,
        onSelect: PropTypes.func,
        fetchTypes: PropTypes.func,
    };

    componentDidMount() {
        const {fetchTypes} = this.props;
        fetchTypes();
    }

    render() {
        const {types, current} = this.props;
        if (!types.length){
            return null;
        }
        const typesWithAll = [null, ...types];
        return (
            <div className="filter">
                {typesWithAll.map(item => {
                    return <span key={item} className={`label ${item === current ? 'primary' : 'secondary'}`}
                                 onClick={() => this.handleSelect(item)}>{item || 'All'}</span>
                })}
            </div>
        );
    }

    handleSelect(category) {
        const {onSelect} = this.props;
        if (onSelect) {
            onSelect(category);
        }
    }
}

export default Filter;