import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useNavigate} from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'bin',
            company: 'apple',
            theme: 'light',
            title: 'software Engineer',
            message: 'go for it',
            email: 'bin@bin.com',
            fileName: 'bin',
            fileURL: null
        },
        {
            id: '2',
            name: 'bin2',
            company: 'apple',
            theme: 'dark',
            title: 'software Engineer',
            message: 'go for it',
            email: 'bin@bin.com',
            fileName: 'bin2',
            fileURL: null
        },
        {
            id: '3',
            name: 'bin3',
            company: 'apple',
            theme: 'colorful',
            title: 'software Engineer',
            message: 'go for it',
            email: 'bin@bin.com',
            fileName: 'bin3',
            fileURL: null
        }
    ])
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                navigate('/');
            }
        })
    })
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    );
}

export default Maker;