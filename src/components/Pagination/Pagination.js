import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';


class Pagination extends Component {
    static propTypes = {
        total: PropTypes.number,
        current: PropTypes.number,
        showBy: PropTypes.number,
        range: PropTypes.number,
        showByOptions: PropTypes.arrayOf(PropTypes.number),
        onSelect: PropTypes.func,
        onChangeShowBy: PropTypes.func
    };

    static defaultProps = {
        range: 3,
        showByOptions: [10, 20, 50],
    };

    constructor(...props) {
        super(...props);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleChangeShowBy = this.handleChangeShowBy.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        const {total} = this.props;
        if (total < 2) {
            return null;
        }
        return (
            <div className="pagination-container">
                <div className="grid-x align-middle">
                    <div className="cell medium-auto">
                        {this.renderPages()}
                    </div>
                    <div className="cell show-for-small-only">
                        <div className="pagination-container__divider"></div>
                    </div>
                    <div className="cell medium-shrink">
                        <div className="grid-x align-center-middle">
                            <div className="cell shrink">
                                Show by
                            </div>
                            <div className="cell shrink">
                                {this.renderShowBy()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderPrevious() {
        const {current} = this.props;
        if (current > 1) {
            return (
                <li className="pagination-previous">
                    <button aria-label="Previous page" onClick={this.handlePrevious}>Previous</button>
                </li>
            );
        }
        return <li className="pagination-previous disabled">Previous</li>;
    }

    renderNext() {
        const {current, total} = this.props;
        if (current < total) {
            return (
                <li className="pagination-next">
                    <button aria-label="Next page" onClick={this.handleNext}>Next</button>
                </li>
            )
        }
        return <li className="pagination-next disabled">Next</li>
    }

    renderPages() {
        const {current, total, range} = this.props;
        let start, end;
        if ((range * 2 + 1) > total) {
            start = 1;
            end = total;
        } else {
            const startDiff = current - range;
            const endDiff = total - (current + range);
            start = startDiff > 0 ? startDiff + (endDiff < 0 ? endDiff : 0) : 1;
            end = endDiff > 0 ? current + range - (startDiff < 0 ? startDiff : 0) : 1;
        }
        const pages = [];
        while (start <= end) {
            pages.push(start);
            start++;
        }
        return (
            <ul className="pagination text-center medium-text-left">
                {this.renderPrevious()}
                {pages.map(page => {
                    if (page === current) {
                        return <li key={page} className="current">{page}</li>
                    }
                    return <li key={page}>
                        <button onClick={this.handleSelect} value={page}>{page}</button>
                    </li>
                })}
                {this.renderNext()}
            </ul>
        )
    }

    renderShowBy() {
        const {showBy, showByOptions} = this.props;
        return (
            <div className="small button-group">
                {showByOptions.map(item => {
                    return (
                        <button key={item} className={`button ${showBy === item ? 'primary' : 'secondary'}`}
                                value={item}
                                onClick={this.handleChangeShowBy}>{item}</button>
                    );
                })}
            </div>
        )
    }

    handlePrevious() {
        const {current, onSelect} = this.props;
        if (onSelect) {
            onSelect(current - 1);
        }
    }

    handleNext() {
        const {current, onSelect} = this.props;
        if (onSelect) {
            onSelect(current + 1);
        }
    }

    handleSelect(e) {
        const {onSelect} = this.props;
        const page = parseInt(e.target.value, 10);
        if (onSelect) {
            onSelect(page);
        }
    }

    handleChangeShowBy(e) {
        const {onChangeShowBy} = this.props;
        const showBy = parseInt(e.target.value, 10);
        if (onChangeShowBy) {
            onChangeShowBy(showBy);
        }
    }

}

export default Pagination;