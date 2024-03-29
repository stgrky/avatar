import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = (contact) => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  console.log(`contactContext`, contactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts.map((contact) => <ContactItem contact={contact} />)}
    </Fragment>
  );
};

export default Contacts;
