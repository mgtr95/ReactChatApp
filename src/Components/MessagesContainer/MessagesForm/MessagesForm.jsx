import React, { useState } from "react";
import styles from "./MessagesForm.module.css";

export default function MessagesForm({ handleMessageSending }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (text.trim() === "") return;

    handleMessageSending(text);
    setText("");
  }

  function handleChange(e) {
    const value = e.target.value;
    
    setText(value);
  }

  return (
    <form className={styles.messageForm} onSubmit={handleSubmit}>
      <input
        className={styles.messageFormInput}
        placeholder="Type a message.."
        type="text"
        value={text}
        onChange={handleChange}
      />
      <input className={styles.messageFormButton} type="submit" value="" />
    </form>
  );
}
