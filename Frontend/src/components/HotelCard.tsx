import React from 'react';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  id: number;
  name: string;
  city: string;
  price: number;
  image: string;
  rating: number;
}

const HotelCard: React.FC<HotelCardProps> = ({ id, name, city, price, image, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-all">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
      <p className="text-gray-700">{city}</p>
      <p className="text-lg font-medium text-green-600">${price} per night</p>
      <p className="text-yellow-500">{'⭐'.repeat(Math.round(rating))}</p>
      <Link to={`/hotel/${id}`} className="text-blue-500 mt-4 inline-block">View Details</Link>
    </div>
  );
};

export default HotelCard;
