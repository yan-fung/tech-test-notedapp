import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import Alert from "./Alert";
import { useState } from "react";
import "../styles/newsletterSignup.scss";
import isValidEmail from "../utils/emailValidator";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ message: "", isSuccess: false });
    try {
      if (!isValidEmail(email)) {
        setAlert({
          message: "Invalid email, please enter again.",
          isSuccess: false,
        });
        setEmail("");
        console.log(alert);
        return;
      } else {
        const querySnapshot = await getDocs(
          query(
            collection(db, "newsletter-subscriber"),
            where("email", "==", email)
          )
        );

        if (!querySnapshot.empty) {
          setAlert({
            message: "Email already exists.",
            isSuccess: false,
          });
          setEmail("");
          console.log(alert);
          return;
        }

        const docRef = await addDoc(collection(db, "newsletter-subscriber"), {
          email: email,
          date: serverTimestamp(),
        });
        setAlert({
          message: "Thanks for subscribing to our newsletter!",
          isSuccess: true,
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      setAlert({
        message: "Invalid email, please enter again.",
        isSuccess: false,
      });
      console.log(e);
    }
    setEmail("");
  };

  return (
    <div className="subscription-container">
      <div> Stay up-to-date with</div>
      <p>
        News, updates, promos, and exclusives from{" "}
        <span className="noted">Noted.</span>
      </p>

      <div className="subscription-form">
        {!alert.isSuccess && (
          <form onSubmit={handleSubmit} className="form">
            <label className="label">
              <input
                className="input"
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
            </label>
            <button className="button" type="submit">
              Subscribe
            </button>
          </form>
        )}
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

export default NewsletterSignup;
