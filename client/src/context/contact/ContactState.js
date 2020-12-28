import React, { useReducer } from "react";
import {v4 as uuid} from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Grant Test1",
        email: "grant@test1.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Grant Test2",
        email: "grant@test2.com",
        phone: "111-111-1112",
        type: "personal",
      },
      {
        id: 3,
        name: "Grant Test3",
        email: "grant@test3.com",
        phone: "111-111-1113",
        type: "professional",
      },
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }
  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact

      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
