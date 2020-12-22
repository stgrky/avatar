import React from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

import "./style.scss";

const ContactsPage = () => {
  return (
    <div className="grid-2">
      <div className = "tg-contact-form-container"><ContactForm/></div>
      <div className = "tg-contact-container">
        <Contacts />
      </div>
    </div>
  );
};

export default ContactsPage;
