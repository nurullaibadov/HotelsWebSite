import React, { useEffect, useState } from 'react';
import { getHotels } from '../api/hotelApi';
import HotelCard from './HotelCard';

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getHotels();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  );
};

export default HotelList;
