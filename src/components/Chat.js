import React, { useContext, useEffect, useState } from 'react';
//styles
import styles from './Chat.module.css';
//components
import Navbar from './Navbar';
//navigate
import { useNavigate } from 'react-router-dom';
//auth firebase
import { auth } from '../firebase';
//chat engine
import { ChatEngine } from 'react-chat-engine';
//context
import { AuthContext } from './AuthContextProvider';
import Loader from './Loader';
import axios from 'axios';

const Chat = () => {
    
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "a7bc786c-bfd6-464a-ad64-94d584e84993",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "c539c13f-25e9-4ab5-9d84-b90c78ca3321"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                    
                })
        })

    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/")
    }

    if (!user || loading) return <Loader />

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="a7bc786c-bfd6-464a-ad64-94d584e84993"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chat;