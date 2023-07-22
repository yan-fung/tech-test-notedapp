import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Alert = ({ message, success }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`alert-${success ? "success" : "error"}`}>
      {message === "Thanks for subscribing to our newsletter." ? (
        <FontAwesomeIcon icon={faCheck} className="check" />
      ) : (
        <FontAwesomeIcon icon={faCircleExclamation} className="error" />
      )}
      {message}
    </div>
  );
};

export default Alert;
