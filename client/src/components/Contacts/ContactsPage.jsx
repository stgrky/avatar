import React, { useContext, useEffect } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import ContactFilter from "./ContactFilter";
import AuthContext from "../../context/auth/authContext"


import "./style.scss";

const ContactsPage = () => {
  const authContext = useContext(AuthContext)

  useEffect(()=> {
    authContext.loadUser();
    //eslint-disable-next-line
  }, [])
  return (
    <div className="grid-2">
      <div className="tg-contact-form-container">
        <ContactForm />
      </div>
      <div className="tg-contact-container">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default ContactsPage;
