import {connect} from 'react-redux';

import Search from '../../components/Search/Search';
import * as uiActions from '../../store/ui/ui.actions';


const mapStateToProps = (state) => {
    return {}
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (text) => dispatch(uiActions.setSearchText(text))
    }
};


const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;