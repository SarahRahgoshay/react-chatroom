import React from 'react';
//styles
import styles from './Chat.module.css'
import Navbar from './Navbar';

const Chat = () => {
    return (
        <div className={styles.container}>
            <Navbar />  
        </div>
    );
};

export default Chat;