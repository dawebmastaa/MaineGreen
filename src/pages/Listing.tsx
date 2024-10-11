import React from 'react';
import { useParams } from 'react-router-dom';

const Listing: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in a real app, you'd fetch this based on the ID
  const listing = {
    name: "Green Leaf Dispensary",
    category: "Recreational",
    location: "Portland",
    description: "Premium cannabis products in a welcoming, educational environment.",
    phone: "(207) 555-1234",
    website: "www.greenleafdispensary.com",
    image: "https://images.unsplash.com/photo-1603909223429-69858aa61c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{listing.name}</h1>
      <img src={listing.image} alt={listing.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <div className="mb-4">
        <p className="text-gray-600">{listing.category}</p>
        <p className="text-gray-600">{listing.location}</p>
      </div>
      <p className="mb-4">{listing.description}</p>
      <div>
        <p><strong>Phone:</strong> {listing.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${listing.website}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">{listing.website}</a></p>
      </div>
    </div>
  );
};

export default Listing;