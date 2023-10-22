import React from 'react';
import styles from './Navbar.module.css'

const Navbar = ({logout}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Chatroom
            </div>
            <div onClick={logout} className={styles.logout}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;