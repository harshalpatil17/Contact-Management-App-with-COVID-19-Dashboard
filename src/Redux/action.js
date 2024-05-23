// Importing action types from actionTypes.js
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

// Action creator for adding a contact
// Takes a payload as argument which contains the contact details
export const addContact = (payload) => {
  console.log(payload) // Logging the payload to the console
  // Returns an action of type ADD_CONTACT with the payload
  return {
    type: ADD_CONTACT,
    payload,
  };
};

// Action creator for removing a contact
// Takes an id as argument which is the id of the contact to be removed
export const removeContact = (id) => {
  // Returns an action of type REMOVE_CONTACT with the payload containing the id
  return {
    type: REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};

// Action creator for editing a contact
// Takes a payload as argument which contains the updated contact details
export const editContact = (payload) => {
  console.log(payload) // Logging the payload to the console
  // Returns an action of type EDIT_CONTACT with the payload
  return {
    type: EDIT_CONTACT,
    payload,
  };
};
