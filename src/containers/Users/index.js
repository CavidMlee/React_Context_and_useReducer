import React, { useContext } from 'react';
import User from '../../components/UserComponent';
import { UserContext } from '../../context/userContext'

const Users = () => {
    const { users } = useContext(UserContext)
    return (
        <div>
            {users.map(user => {
                return (
                    <User key={user.id} user={user} />
                )
            })}
        </div>
    )
}

export default Users