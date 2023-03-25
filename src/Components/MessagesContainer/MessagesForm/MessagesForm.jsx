import React from "react";
import styles from "./MessagesForm.module.css";

export default function MessagesForm() {
    return (
        <form className={styles.messageForm} onsubmit="return false;">
            <input
                className={styles.messageFormInput}
                placeholder="Type a message.."
                type="text"
            />
            <input className={styles.messageFormButton} type="submit" value="" />
        </form>
    );
}
