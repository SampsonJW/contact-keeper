import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';
import contactContext from './contactContext';

function ContactState(props) {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Libby Winter',
        email: 'LibbyWinter@gmail.com',
        phone: '111-111-111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Libby Splinter',
        email: 'LibbySplinter@gmail.com',
        phone: '222-222-222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Slibby Chinter',
        email: 'SlibbyChinter@gmail.com',
        phone: '333-333-333',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
