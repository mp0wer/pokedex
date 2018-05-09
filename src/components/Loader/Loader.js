import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

class Loader extends Component {
    static propTypes = {
        show: PropTypes.bool
    };

    render() {
        const {show} = this.props;
        if (!show) {
            return null;
        }
        return (
            <div className="loader-overlay">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Loader;