import React from 'react';
import './App.css';
import Users from './containers/Users';
import AddUser from './containers/AddUser';
import UserProvider from './context/userContext'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AddUser />
        <Users />
      </UserProvider>
    </div>
  );
}

export default App;
