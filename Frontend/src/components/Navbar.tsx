import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">HotelReservation</Link>
        <div className="space-x-4">
          <Link to="/hotels" className="text-white">Hotels</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
          <Link to="/profile" className="text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
