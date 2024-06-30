// src/utils/geocode.js
export const geocode = async (address) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const data = await response.json();
    if (data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } else {
      throw new Error("Address not found");
    }
  };
  