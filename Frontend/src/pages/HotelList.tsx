import React from 'react';
import { Link } from 'react-router-dom';

const HotelList: React.FC = () => {
  // Dummy data for hotels
  const hotels = [
    { id: 1, name: 'Hotel A', description: 'A beautiful hotel' },
    { id: 2, name: 'Hotel B', description: 'A luxurious hotel' },
    // Add more hotels as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map(hotel => (
          <div key={hotel.id} className="border p-4 rounded">
            <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
            <p className="mb-2">{hotel.description}</p>
            <Link to={`/hotels/${hotel.id}`} className="text-blue-600">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
