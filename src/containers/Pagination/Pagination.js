import {connect} from 'react-redux';

import Pagination from '../../components/Pagination/Pagination';
import * as uiActions from '../../store/ui/ui.actions';
import * as selectors from '../../store/selectors';


const mapStateToProps = (state) => {
    return {
        showBy: selectors.getShowBy(state),
        current: selectors.getPage(state),
        total: selectors.getTotalPages(state)
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onChangeShowBy: (showBy) => dispatch(uiActions.setShowBy(showBy)),
        onSelect: (page) => dispatch(uiActions.setPage(page))
    }
};


const PaginationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);

export default PaginationContainer;