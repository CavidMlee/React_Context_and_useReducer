import React from 'react';
import './style.css';

const AddUser = ({addNewUser,handleUserData}) => {
    return (
        <form onSubmit={addNewUser} className='add_user_container'>
            <input
                type='text'
                name='name'
                placeholder='Name'
                onChange={handleUserData}
            />
            <input
                type='text'
                name='about'
                placeholder='About'
                onChange={handleUserData}
            />
            <button>Add User</button>
        </form>
    )
}

export default AddUser;