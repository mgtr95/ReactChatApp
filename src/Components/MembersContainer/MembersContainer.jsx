import React from "react";
import styles from "./MembersContainer.module.css";

export default function MembersContainer({ members }) {
  console.log(members);
  return (
    <div className={styles.membersContainer}>
      <div className={styles.membersCount}> users in room</div>
      {members &&
        members.map((member, id) => (
          <div key={id} className={styles.member}>
            {member.clientData.name}
          </div>
        ))}
    </div>
  );
}

/* <div className={styles.membersContainer}>
<div className={styles.membersCount}> users in room</div>
{members && members.map((member, id) => (
  <div  key={id} className={styles.membersList}>{member.clientData.name}</div>
))}
</div> */
