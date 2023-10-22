import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
//context
import AuthContextProvider from './components/AuthContextProvider';

const App = () => {
  return (
    <div>
      <AuthContextProvider>      
        <Routes>
          <Route path='/chats' element={<Chat />} />
          <Route path='/' element= {<Login/>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;