import React from "react";
import PropTypes from "prop-types";

const declination = (value) => {
    value = Math.abs(value) % 100;
    const words = ["человек тусанет", "человека тусанут"];
    const num = value % 10;
    if (value > 10 && value < 20) return words[0];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[0];
};

const renderPhrase = (num) => {
    return num === 0
        ? (
            <span className="badge bg-danger m-2">
                    Никто не хочет с тобой тусить
            </span>
        )
        : (
            <span className="badge bg-primary m-2">
                {num} {declination(num)} с тобой
            </span>
        );
};

const SearchStatus = ({ length }) => <h4>{renderPhrase(length)}</h4>;

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
