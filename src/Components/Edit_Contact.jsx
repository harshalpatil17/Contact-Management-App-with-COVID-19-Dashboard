import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';

function EditContact() {
    // Extract the contact ID from the URL parameters
    const { id } = useParams();
    console.log(id);

    // Use the useDispatch hook to get the dispatch function from Redux
    const dispatch = useDispatch();

    // Access the contacts from the Redux store
    const AllContact = useSelector((store) => store.contacts);

    // Initialize form state with an empty object
    const [form, setForm] = useState({});

    // Handle input changes and update the form state
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission and dispatch the editContact action
    function handleSave() {
        dispatch(editContact({ id, ...form }));
    }

    // Use useEffect to set the form state based on the selected contact
    useEffect(() => {
        AllContact.filter((el) => el.id == id && setForm(el));
    }, [AllContact, id]);

    return (
        <div className="w-1/2 mx-auto my-4 pt-16 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Edit Contact</h2>
            <div className="mb-6">
                <label className="block font-medium text-gray-600 mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-300"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6">
                <label className="block font-medium text-gray-600 mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-300"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6">
                <label className="block font-medium text-gray-600 mb-2" htmlFor="mob">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-300"
                    id="mob"
                    type="number"
                    name="mob"
                    value={form.mob || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6">
                <label className="block font-medium text-gray-600 mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-300"
                    id="status"
                    name="status"
                    value={form.status || ''}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}

export default EditContact;
