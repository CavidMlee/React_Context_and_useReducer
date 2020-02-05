import React, { createContext, useReducer } from 'react';
import { userReducer } from './userReducer';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, dispatch] = useReducer(userReducer, [
        { id: 1, name: 'Ted', about: 'programmer' },
        { id: 2, name: 'Jane', about: 'teacher' }
    ]);

    return (
        <UserContext.Provider value={{ users, dispatch }} >
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider;