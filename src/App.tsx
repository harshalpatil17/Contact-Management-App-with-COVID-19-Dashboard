// Import the useLocation hook from react-router-dom to get the current route
import { useLocation } from "react-router-dom";

// Import the CSS file for styling
import './App.css';

// Import the SideBar component
import SideBar from './Components/SideBar';

// Import the AllRoutes component
import AllRoutes from './Pages/AllRoutes';

function App() {
  // Get the current route using useLocation hook
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      {/* Header section with conditional title based on the current route */}
      <header className='z-50 w-full fixed shadow-md shadow-gray-500 top-0 text-3xl text-white bg-gradient-to-r from-indigo-400 to-purple-600 font-bold p-4 flex justify-center'>
        {currentRoute === "/" ? 'Contact Page' :
          currentRoute === "/dashboard" ? "Charts and Maps" :
            'Contact Page'}
      </header>
      
      {/* Main content area with sidebar and main content */}
      <div className='flex mt-20'>
        {/* Sidebar section */}
        <aside className='fixed top-20 left-0 h-screen w-1/4 bg-white shadow-xl p-4 rounded-lg'>
          <SideBar />
        </aside>
        
        {/* Main content section */}
        <main className='w-3/4 ml-auto p-6 bg-white shadow-xl rounded-lg mx-4'>
          <AllRoutes />
        </main>
      </div>
    </div>
  );
}

// Export the App component as default export
export default App;
