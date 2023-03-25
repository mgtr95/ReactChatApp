import React from "react";
import styles from "./MessagesBox.module.css";

export default function MessagesBox() {
    return (
        <div className={styles.messagesOuter}>
            <div className={styles.messages}></div>
        </div>
    );
}
