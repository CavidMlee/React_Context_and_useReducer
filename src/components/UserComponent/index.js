import React from 'react';
import './style.css';

const Users = ({user}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <hh3>{user.about}</hh3>
        </div>
    )
}

export default Users;