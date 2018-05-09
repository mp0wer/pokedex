import {connect} from 'react-redux';

import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import * as selectors from '../../store/selectors';


const mapStateToProps = (state) => {
    return {
        error: selectors.getError(state)
    }
};


const ErrorHandlerContainer = connect(
    mapStateToProps,
)(ErrorHandler);

export default ErrorHandlerContainer;