import { useNavigate } from "react-router";
import styles from "./LogoutPrompt.module.css";

export default function LogoutPrompt({ loginRoute, chatRoute, drone }) {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();

    drone.close();
    navigate(loginRoute);
  }

  function handleCancelLogout(e) {
    e.preventDefault();

    navigate(chatRoute);
  }

  return (
    <div className={styles.promptContainer}>
      <p>Are you sure you want to log out?</p>
      <div className={styles.buttonContainer}>
        <button onClick={handleLogout}>Yes</button>
        <button onClick={handleCancelLogout}>No</button>
      </div>
    </div>
  );
}
