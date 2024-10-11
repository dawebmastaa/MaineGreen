import React from 'react';
import { Link } from 'react-router-dom';

const Directory: React.FC = () => {
  const listings = [
    { id: 1, name: "Green Leaf Dispensary", category: "Recreational", location: "Portland" },
    { id: 2, name: "Healing Buds", category: "Medical", location: "Bangor" },
    { id: 3, name: "Coastal Cannabis Co.", category: "Recreational & Medical", location: "Bar Harbor" },
    { id: 4, name: "Pine Tree Cultivation", category: "Grower", location: "Augusta" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Maine Cannabis Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <Link key={listing.id} to={`/listing/${listing.id}`} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{listing.name}</h2>
            <p className="text-gray-600 mb-2">{listing.category}</p>
            <p className="text-sm text-gray-500">{listing.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Directory;