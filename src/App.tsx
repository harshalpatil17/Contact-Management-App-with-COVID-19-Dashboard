import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      <header className='z-50 w-full fixed shadow-md shadow-gray-500 top-0 text-3xl text-white bg-gradient-to-r from-indigo-400 to-purple-600 font-bold p-4 flex justify-center'>
        {currentRoute === "/" ? 'Contact Page' :
          currentRoute === "/dashboard" ? "Charts and Maps" :
            'Contact Page'}
      </header>
      <div className='flex mt-20'>
        <aside className='fixed top-20 left-0 h-screen w-1/4 bg-white shadow-xl p-4 rounded-lg'>
          <SideBar />
        </aside>
        <main className='w-3/4 ml-auto p-6 bg-white shadow-xl rounded-lg mx-4'>
          <AllRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
