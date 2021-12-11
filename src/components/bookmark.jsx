import React from "react";
import PropTypes from "prop-types";

const Bookmark = (props) => {
    const getBookClass = (classes) => {
        return classes ? "bi bi-bookmark-star-fill" : "bi bi-bookmark-star";
    };

    return (
        <button onClick={props.onChange}>
            <i className={getBookClass(props.bookmark)}></i>
        </button>
    );
};

Bookmark.propTypes = {
    onChange: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired
};

export default Bookmark;
