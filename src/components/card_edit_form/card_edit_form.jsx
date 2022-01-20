import React from 'react';
import styles from './card_edit_form.module.css';
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({card, updateCard, deleteCard}) => {
    const {name, company, title, message, email, theme, fileName, fileURL} = card;
    const onSubmit = () => {
        deleteCard(card)
    };
    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
            <input className={styles.input} type="text" name="company" value={company} onChange={onChange}/>
            <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
            <input className={styles.input} type="text" name="email" value={email} onChange={onChange}/>
            <textarea className={styles.textarea} name="message" value={message} onChange={onChange}/>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit} />
        </form>
    )
};

export default CardEditForm;