// Import action types
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

// Define initial state
const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

// Reducer function to handle state changes based on actions
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: {
      let flag = 0;

      // Check if required fields are empty
      if (action.payload.first_name === "" || action.payload.last_name === "" || action.payload.mob === "") {
        alert('Ohh, you missed required input. Please fill it.');
        flag = 1;
      } else {
        // Check if contact already exists
        state.contacts.forEach((el) => {
          if (el.first_name === action.payload.first_name && el.last_name === action.payload.last_name) {
            alert('Name already exists in contact');
            flag = 1;
          }
        });
      }

      // If no errors, save the contact
      if (!flag) {
        alert('Contact saved successfully!!!');
        let updatedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
        updatedContacts.push({ id: state.contacts.length + 1, ...action.payload });
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        
        return {
          ...state,
          contacts: [...updatedContacts],
        };
      }
      return state;  // Return the current state if there's an error
    }
     
    case REMOVE_CONTACT: {
      // Remove contact from localStorage and state
      let Contacts = JSON.parse(localStorage.getItem("contacts"));
      let updatedContacts = Contacts.filter((el) => el.id !== action.payload.id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      return {
        ...state,
        contacts: [...updatedContacts],
      };
    }
  
    case EDIT_CONTACT: {
      if (action.payload.first_name === "" || action.payload.last_name === "" || action.payload.mob === "") {
        alert('Input fields cannot be left empty');
        return state;  // Return the current state if there's an error
      }

      let flag = 0;
      let Contacts = JSON.parse(localStorage.getItem("contacts"));

      // Check if another contact with the same name exists
      Contacts.forEach((el) => {
        if (el.id !== action.payload.id && el.first_name === action.payload.first_name && el.last_name === action.payload.last_name) {
          alert("Name already exists!!");
          flag = 1;
        }
      });

      if (flag) {
        return state;  // Return the current state if there's an error
      } else {
        // Update contact in localStorage and state
        let updatedContacts = Contacts.map((el) => {
          if (el.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return el;
          }
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        alert('Contact has been updated');

        return {
          ...state,
          contacts: updatedContacts,
        };
      }
    }
      
    default:
      return state;  // Return the current state for unknown action types
  }
}
