import React from "react";
import style from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={style.colour}>
      <h1 className={`${style.head} fw-bold`}>CONTACT SECTION</h1>

      <div className={style.starBox}>
        <span className={style.line}></span>
        <i className="fa-solid fa-star"></i>
        <span className={style.line}></span>
      </div>

      <form className={style.contactForm}>
        {[
          { id: "userName", type: "text", label: "userName" },
          { id: "userAge", type: "text", label: "userAge" },
          { id: "userEmail", type: "email", label: "userEmail" },
          { id: "userPassword", type: "password", label: "userPassword" },
        ].map((field) => (
          <div className={style.inputGroup} key={field.id}>
            <input
              type={field.type}
              id={field.id}
              placeholder=" "
            
            />
            <label htmlFor={field.id}>{field.label}</label>
    
          </div>
        ))}

        <button type="submit">send Message</button>
      </form>
    </div>
  );
}
