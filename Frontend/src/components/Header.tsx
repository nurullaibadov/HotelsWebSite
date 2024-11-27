import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hotel Finder</h1>
        <nav>
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/search" className="mx-4">Search</Link>
          <Link to="/login" className="mx-4">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
