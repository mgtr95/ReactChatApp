import React from "react";
import styles from "./MessagesBox.module.css";

export default function MessagesBox({ messages }) {
  console.log(messages);
  return (
    <div className={styles.messagesOuter}>
      <div className={styles.messages}>
        {messages &&
          messages.map((message) => (
            <div>{message.data}</div>
          ))

          /* {messages && messages.map(
          (message) =>
             (
                <div>{message.data}</div>
            )
        )} */
        }
      </div>
    </div>
  );
}

/* <div className={`message ${side}`}>
<span className="message-user">{member.clientData.name}</span>
<span className="message-value">{message.data}</span>
<span style={{ fontSize: "9px", color: "rgb(90, 90, 90)" }}>
  {`${time.getHours()}:${
    (time.getMinutes() < 10 ? "0" : "") + time.getMinutes()
  }`}
</span>
</div> */
