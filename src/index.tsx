// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main CSS file for global styling
import './index.css';

// Import the main App component
import App from './App';

// Import the reportWebVitals function for performance monitoring
import reportWebVitals from './reportWebVitals';

// Import BrowserRouter for routing and store for Redux state management
import { BrowserRouter } from "react-router-dom";
import store from './Redux/store';

// Import Provider to connect the Redux store with the React app
import { Provider } from 'react-redux';

// Log the initial state of the Redux store
console.log(store.getState());

// Create the root element for rendering the React app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the React app, wrapped with Provider and BrowserRouter for state management and routing
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Run the reportWebVitals function to measure performance in your app
reportWebVitals();
