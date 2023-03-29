import React from "react";
import styles from "./MessagesBox.module.css";

export default function MessagesBox({ messages }) {
    const time = new Date();
    return (
        <div className={styles.messagesOuter}>
            <div className={styles.messages}>
                {Array.isArray(messages) &&
                    messages.map((message) => (
                        <div
                            key={message.message.id}
                            className={`${styles.message} ${
                                message.side === "right"
                                    ? styles.messageRight
                                    : styles.messageLeft
                            }`}
                        >
                            <span className={styles.messageUser}>
                                {message.message.member.clientData.name}
                            </span>
                            <span className={styles.messageValue}>
                                {message.message.data}
                            </span>
                            <span
                                style={{
                                    fontSize: "9px",
                                    color: "rgb(90, 90, 90)",
                                }}
                            >
                                {`${time.getHours()}:${
                                    (time.getMinutes() < 10 ? "0" : "") +
                                    time.getMinutes()
                                }`}
                            </span>
                        </div>
                    ))}
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

//<div key={id}>{message.data}</div>
