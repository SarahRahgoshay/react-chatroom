import React from 'react';
//styles
import styles from './Chat.module.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Chat = () => {
    
    const navigate = useNavigate();

    const logoutHandler = async () =>{
        await auth.signOut();
        navigate('/');
    }
    return (
        <div className={styles.container}>
            <Navbar logout={logoutHandler} />  
        </div>
    );
};

export default Chat;