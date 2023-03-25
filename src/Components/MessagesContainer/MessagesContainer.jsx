import React from "react";
import styles from "./MessagesContainer.module.css";
import MessagesBox from "./MessagesBox/MessagesBox";
import MessagesForm from "./MessagesForm/MessagesForm";

export default function MessagesContainer () {
    return (
        <div className={styles.messagesContainer}>
            <MessagesBox />
            <MessagesForm />
        </div>
    );
}
