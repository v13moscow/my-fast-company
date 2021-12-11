import React, { useState } from "react";
import Users from "./users";
import SearchStatus from "./searchStatus";
import "bootstrap/dist/css/bootstrap.css";
import api from "../api";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userID) => {
        const newUsers = users.filter((user) => user._id !== userID);
        setUsers(newUsers);
    };

    const changeBookmark = (id) => {
        const newBookmark = users.map((book) => {
            if (book._id !== id) {
                return book;
            }
            return {
                ...book,
                bookmark: !book.bookmark
            };
        });
        setUsers(newBookmark);
    };

    return (
        <>
            {<SearchStatus length={users.length} />}
            {users.length !== 0 && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onBookmark={changeBookmark}
                />
            )}
        </>
    );
};

export default App;
