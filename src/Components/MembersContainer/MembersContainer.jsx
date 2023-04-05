import React from "react";
import styles from "./MembersContainer.module.css";

export default function MembersContainer({ members }) {
  const membersNum = members ? members.length : 0;

  return (
    <div className={styles.membersContainer}>
      <div className={styles.membersCount}>
        {membersNum} user{membersNum === 1 ? "" : "s"} in room
      </div>
      {members &&
        members.map((member, key) => (
          <div key={member.id + key} className={styles.member}>
            {member.clientData.name}
          </div>
        ))}
    </div>
  );
}
