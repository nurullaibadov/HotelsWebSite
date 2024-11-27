import hotelsData from './hotels.json';

export const getHotels = async () => {
  return hotelsData;
};

export const getHotelDetails = async (id: number) => {
  const hotel = hotelsData.find(hotel => hotel.id === id);
  if (!hotel) {
    throw new Error('Hotel not found');
  }
  return hotel;
};
