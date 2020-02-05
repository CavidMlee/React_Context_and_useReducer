import React, { useState, useContext } from 'react';
import AddUserComponent from '../../components/AddUserComponent';
import { UserContext } from '../../context/userContext'

const AddUser = () => {
    const [user, setUser] = useState()

    const { dispatch } = useContext(UserContext)

    const handleUserData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const addNewUser = (e) => {
        e.preventDefault()
        dispatch({type:"ADD_USER",user})
    }
    return (
        <AddUserComponent addNewUser={addNewUser} handleUserData={handleUserData} />
    )
}

export default AddUser;