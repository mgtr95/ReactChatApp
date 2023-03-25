import React from 'react';
import styles from "./MembersContainer.module.css";

export default function MembersContainer() {
    return (
        <div class={styles.membersContainer}>
            <div class={styles.membersCount}>-</div>
            <div class={styles.membersList}>-</div>
        </div>
    );
}
