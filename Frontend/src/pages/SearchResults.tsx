import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import { getHotels } from '../api/hotelApi';

const SearchResults: React.FC = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');

  useEffect(() => {
    const fetchHotels = async () => {
      const allHotels = await getHotels();
      const filteredHotels = allHotels.filter(hotel =>
        hotel.name.toLowerCase().includes(query?.toLowerCase() || '')
      );
      setHotels(filteredHotels);
    };

    fetchHotels();
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
