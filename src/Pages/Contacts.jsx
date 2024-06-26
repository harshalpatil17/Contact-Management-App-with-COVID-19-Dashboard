

// Importing necessary hooks and functions from react, react-redux and react-router-dom
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Importing Popup component and removeContact action from respective files
import Popup from "../Components/Popup";
import { removeContact } from "../Redux/action";

// Defining Contacts component
const Contacts = () => {
    // Using useState hook to manage state for Popup visibility and selected contact
    const [isOpen, setIsOpen] = useState(false);
    const [singleContact, setSingleContact] = useState({});

    // Placeholder for data
    let data = undefined;

    // Using useSelector hook to access contacts from the redux store
    const AllContacts = useSelector((store) => store.contacts);

    // Using useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Function to toggle Popup visibility and set selected contact
    const togglePopup = (contact) => {
        setSingleContact(contact);
        setIsOpen(!isOpen);
    };

    // Using useEffect hook to perform side effects
    useEffect(() => {}, [dispatch, AllContacts.length]);

    // Rendering Contacts component
    return (
        <div className="flex flex-col items-center pt-16 text-gray-900 p-4 w-full bg-gray-100 min-h-screen">
            <div className="m-4">
                <button className="rounded-full bg-violet-500 hover:bg-violet-600 p-4 text-2xl text-white shadow-lg">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>
            </div>
            {AllContacts.length === 0 && (
                <div className="m-auto w-fit p-4 text-center text-blue-500">
                    <svg className="m-auto" width="280" height="0" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG Path */}
                    </svg>
                    <h1 className="text-3xl mt-4">No Contact Found</h1>
                    <p className="text-lg">Please add contact using the Create Contact button.</p>
                </div>
            )}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full px-8">
                {AllContacts.map((el) => (
                    <div key={el.id} className="bg-white rounded-lg shadow-md m-4 p-4 text-gray-900 transform transition-all hover:scale-105 hover:shadow-xl">
                        <div onClick={() => togglePopup(el)} className="cursor-pointer">
                            <img className="w-24 h-24 rounded-full mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAANlBMVEWVu9////+QuN6Mtt3K3O7j7Pby9vvE2OyavuCvy+akxOPY5fLp8Pj6/P260umqyOWFstvR4PDphOmSAAADqElEQVR4nO1b27KiMBCECbkCgfz/zy43dT0HyTRmdGuLfrJKyzSTuXZIVV24cOFCARCpGURfWVy54G3TzmisD059lMb00LE19d8wOlafs8UY2noPbRg/sj45vbv+DO0+YAayL9efYcUp0GsDbGYQpqBMhsDkk0qSAHVZAnXdCVqB9mPgJ1oxChRZBOo6ilHomQx6ofVVYhKo6yTjjcQmUNci20ANwKARoZBPBQ8YCQIDQKCuh/IEoE0Q2YZsQXiGQHlwiBtMjuCKM8DcQMIRPMjAlyZAKIPitSHTGn2CARaMAuF4MTjhB8WbZnZ/dEN5T4TzQfG0/P2cGLhN4oo+FGfw/crEGlYeEBhbFG9auUGX75bBcJQYWgLEoLwjVvyJaYbI1AQ1iiIqwj8wsSCOIOIG1QgwkBHVCJidhQQEfnESmNkWMGSsFWJiFrtPEhQVeUYQqIs3KJ4RRHVVjhFE1IsbWAVSTsubMeb7lE5Y4ne5CtnLueGK7D7I7sFC4dvnC1NIHlXpRlTav1N4vRFRnMBqYvL7acFsk5rcRlBl1fZhr1CnbWllZTiQctPE0G5mVi49h2Wf3PbVOP+s+AEoqSquueh+fkI0JG1mGr3RaXicdq6TTRerciSmp/f6vvOde3Ag50IIztF9fXL3pGm0L2OJ6VnbJ4P3/rXDq/j803Z4+ySYyP72ex32Oajwe6Qw9j07kN8vA3r49b+TrfZHmv4dNeVgSOma4GZPWFG50LyumufHl8zRltGtjd77aFt93LmcPfiCBbzXOFmvsHH9GKeaBvBQ5RinZmlUvjvGiSlKlTTBKV0J1A9zwPXFgoGwAg6HERMw8zBoE+8KE4ADEhbz8wDbeEAv4QLUVUAVmQNQaUbeduACY1A2Ia6A0mLxbDADygiglM9DCyXm8o44uSJCADzS4QESuEo2Jw8AxQk+XOQBaJpFQgEKBpFQgIJBSYTCFAx8BiQRClMw8HchK9mdAyD0Fe4R7wz44SgTjMAbQkLpAEgIAi3aCnajJpSQgJQEv3fDBVtIEEqJQFK8GEAvJmNgqznfj8ay8skDkJCSyleGPgHrz9r5jpb6Dox1qIpCozsQKTF0jRtP6XlEzma0yjyMtu4deZuUG5ruLAvTNUMJhZ9UNfy8wsVYvY1DwUOO5Q5dsElzQqTXyQaZ+3aLij7EpDuzx6Q3nU7TgxMJX3AjtZzuDD42KS13+1Jqoh+W056P3vCbH1Wp7YLjd644Xrhw4T/DHzhTKer8tGZTAAAAAElFTkSuQmCC" alt="" />
                            <div className="p-4">
                                {isOpen && (
                                    <Popup close={() => togglePopup(data)} el={singleContact} />
                                )}
                            </div>
                            <div className="text-left">
                                <p><strong>First Name:</strong> {el.first_name}</p>
                                <p><strong>Last Name:</strong> {el.last_name}</p>
                                <p><strong>Status:</strong> {el.status === "active" ? "Active" : "Inactive"}</p>
                            </div>
                        </div>
                        <div className="flex justify-between my-2">
                            <Link to={`edit/${el.id}`}>
                                <button className="rounded p-2 bg-violet-500 hover:bg-violet-600 text-white shadow-md">
                                    Edit
                                </button>
                            </Link>
                            <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-500 hover:bg-red-600 text-white shadow-md">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts;
