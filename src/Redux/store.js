// Import the createStore function from Redux
import { createStore } from 'redux';

// Import the reducer function from the reducer.js file
import reducer from './reducer';

// Create the Redux store using the reducer
const store = createStore(reducer);

// Export the store to be used in the application
export default store;
