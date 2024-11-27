import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="p-2 border rounded"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-600 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
