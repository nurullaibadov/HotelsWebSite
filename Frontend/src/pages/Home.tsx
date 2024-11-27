import React from 'react';
import HotelList from '../components/HotelList';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <HotelList />
    </div>
  );
};

export default Home;
