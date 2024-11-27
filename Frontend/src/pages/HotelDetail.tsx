import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHotelDetails } from '../api/hotelApi';

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<any | null>(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const data = await getHotelDetails(Number(id));
        setHotel(data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{hotel.name}</h1>
      <p>{hotel.description}</p>
      <p className="font-medium text-green-600">${hotel.price} per night</p>
      <p>Rating: {'⭐'.repeat(Math.round(hotel.rating))}</p>
    </div>
  );
};

export default HotelDetails;
