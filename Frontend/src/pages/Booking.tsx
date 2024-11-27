import React from 'react';
import { useParams } from 'react-router-dom';

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const hotel = {
    name: 'Example Hotel',
    price: 200,
  };

  const handleBooking = () => {
    console.log('Booking hotel:', id);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Booking</h2>
      <p className="mb-2">You are booking: <strong>{hotel.name}</strong></p>
      <p className="mb-4">Price: <strong>{hotel.price} USD/night</strong></p>
      <button onClick={handleBooking} className="bg-blue-600 text-white p-2 rounded">Confirm Booking</button>
    </div>
  );
}

export default Booking;
