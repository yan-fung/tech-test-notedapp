import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

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
      const emailPattern =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const [, tld] = email.split(".").slice(-2);
      const validTlds = ["com", "org", "net"];
      if (!emailPattern.test(email)) {
        setAlert({
          message: "Invalid email, please enter again.",
          isSuccess: false,
        });
        console.log(alert);
        return;
      }
      if (email.match(/\.com\.com|\.net\.net|\.org\.org$/i)) {
        setAlert({
          message: "Invalid email, please enter again.",
          isSuccess: false,
        });
        console.log(alert);
        return;
      }
      if (email.match(/\.\./) || email.split("@")[0].match(/\.{2,}/)) {
        setAlert({
          message: "Invalid email, please enter again.",
          isSuccess: false,
        });
        console.log(alert);
        return;
      }

      if (!validTlds.includes(tld.toLowerCase())) {
        setAlert({
          message: "Invalid email, please enter again.",
          isSuccess: false,
        });
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
          console.log(alert);
          return;
        }

        const docRef = await addDoc(collection(db, "newsletter-subscriber"), {
          email: email,
          date: serverTimestamp(),
        });
        setAlert({
          message: "Email added successfully.",
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
      <h1>News, updates, promos, and exclusives from NOTED.</h1>

      <div className="subscription-form">
        <form onSubmit={handleSubmit} className="form">
          <label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleInputChange}
              required
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
            />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
