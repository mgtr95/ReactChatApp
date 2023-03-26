import React from 'react';
import styles from "./MembersContainer.module.css";

export default function MembersContainer() {
    return (
        <div className={styles.membersContainer}>
            <div className={styles.membersCount}>-</div>
            <div className={styles.membersList}>-</div>
        </div>
    );
}
