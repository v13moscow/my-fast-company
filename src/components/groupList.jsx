import React from "react";
import PropTypes from "prop-types";

const normalizeData = (items) => {
    if (Array.isArray(items)) {
        return items;
    }
    return Object.values(items);
};

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const normalizedItems = normalizeData(items);
    return (
        <ul className="list-group">
            {normalizedItems.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={
                        "list-group-item" +
                        (item === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item[contentProperty]}
                </li>
            ))}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    selectedItem: PropTypes.object,
    onItemSelect: PropTypes.func,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default GroupList;
