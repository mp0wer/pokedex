import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './ErrorHandler.scss';

class ErrorHandler extends Component {
    static propTypes = {
        error: PropTypes.instanceOf(Error)
    };

    render() {
        const {error} = this.props;
        return (
            <ReactCSSTransitionGroup transitionName="error-handler"
                                     transitionEnterTimeout={0}
                                     transitionLeaveTimeout={0}>
                {error && <div className="error-handler">
                    Something went wrong. {error.message}
                </div>}
            </ReactCSSTransitionGroup>
        );
    }
}

export default ErrorHandler;