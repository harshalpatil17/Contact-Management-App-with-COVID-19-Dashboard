import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Dashboard from "./Charts_and_Maps";
import EditContact from "../Components/Edit_Contact";
import ContactForm from "../Components/ContactForm";

// Define the AllRoutes component
const AllRoutes = () => {
  return (
    // Define all routes using the Routes component from react-router-dom
    <Routes>
      {/* Route for the Contacts page */}
      <Route path="/" element={<Contacts />} />

      {/* Route for the ContactForm page */}
      <Route path="/contact_form" element={<ContactForm />} />

      {/* Route for the Dashboard page */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Route for editing a contact; uses a dynamic segment (:id) to pass the contact ID */}
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}

export default AllRoutes;
