import React, { useState, useEffect } from "react";
import Users from "./users";
import "bootstrap/dist/css/bootstrap.css";
import api from "../api";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(data);
        });
    }, []);

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
            {users && (
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
