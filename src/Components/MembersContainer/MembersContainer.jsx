import React from "react";
import styles from "./MembersContainer.module.css";
import { useNavigate } from "react-router";

export default function MembersContainer({ members, loginRoute, drone }) {
    const navigate = useNavigate();
    const membersNum = members ? members.length : 0;

    function handleLogout(e) {
        e.preventDefault();

        drone.close();
        navigate(loginRoute);
    }

    return (
        <div className={styles.membersContainer}>
            <div className={styles.membersCount}>
                {membersNum} user{membersNum === 1 ? "" : "s"} in room
            </div>
            {members &&
                members.map((member) => (
                    <div key={member.id} className={styles.member}>
                        {member.clientData.name} {member.clientData.avatar}
                    </div>
                ))}
            <span></span>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
