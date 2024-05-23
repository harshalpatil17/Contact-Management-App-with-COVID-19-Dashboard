import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="flex border-r-2 bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="flex pt-16 flex-col h-screen p-3 shadow-lg w-64">
                <div className="space-y-3">
                    <div className="flex items-center justify-center">
                        <h2 className="text-2xl mt-4 font-extrabold text-gray-800">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-4 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/"
                                    className="flex items-center p-3 space-x-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300"
                                >
                                    <img src={contact} alt="Contacts" className="w-6 h-6" />
                                    <span className="text-gray-700 font-semibold">Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-3 space-x-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300"
                                >
                                    <img src={bar} alt="Charts And Maps" className="w-6 h-6" />
                                    <span className="text-gray-700 font-semibold">Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
