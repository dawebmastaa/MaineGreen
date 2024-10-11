import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to MaineGreen Connect</h1>
      <p className="text-xl mb-8">Your cannabis social network and directory marketplace for Maine</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Connect with Cannabis Enthusiasts</h2>
          <p className="mb-4">Join our community, share experiences, and make new friends across the Pine Tree State.</p>
          <Link to="/profile" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Create Profile</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Discover Local Dispensaries</h2>
          <p className="mb-4">Explore our directory of Maine's finest cannabis establishments, from coastal dispensaries to mountain retreats.</p>
          <Link to="/directory" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Browse Directory</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;