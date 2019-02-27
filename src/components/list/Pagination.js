/**
 * Created by AneeqShah on 2/26/19.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props) => {

    const {page, totalPages, handlePaginationClick} = props;

    return(
        <div className="Pagination">
            <button
                className="Pagination-button"
                onclick={() => handlePaginationClick('prev')}
                disabled={page <= 1}
            >
                &larr;
            </button>
            <span className="Pagination-info">Page <b>{page}</b> of <b>{totalPages}</b></span>
            <button
                className="Pagination-button"
                onClick={() => handlePaginationClick('next')}
                disabled={page >= totalPages}
            >
                &rarr;
            </button>


        </div>
    );
};

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination;