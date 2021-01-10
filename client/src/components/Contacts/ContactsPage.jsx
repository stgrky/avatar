import React from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import ContactFilter from "./ContactFilter";


import "./style.scss";

const ContactsPage = () => {
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
