import {connect} from 'react-redux';

import Loader from '../../components/Loader/Loader';
import * as selectors from '../../store/selectors';


const mapStateToProps = (state) => {
    return {
        show: selectors.getLoading(state)
    }
};


const LoaderContainer = connect(
    mapStateToProps,
)(Loader);

export default LoaderContainer;