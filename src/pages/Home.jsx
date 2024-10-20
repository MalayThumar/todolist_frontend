import React from 'react';
import Sidebar from '../components/Home/Sidebar';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex h-[98vh] gap-4 p-4">
      {/* Sidebar Section */}
      <div className="w-1/6 border border-gray-300 rounded-xl p-4 shadow-md flex flex-col justify-between">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="w-5/6 border border-gray-300 rounded-xl p-4 shadow-md">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
