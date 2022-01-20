import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useNavigate} from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        '1': {
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
        '2': {
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
        '3': {
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
    })
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                navigate('/');
            }
        })
    });

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} createOrupdateCard={createOrUpdateCard}
                        deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;