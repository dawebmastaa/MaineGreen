import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

const Profile: React.FC = () => {
  const { user, login } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const updatedUser = { ...user, name, email };
      login(updatedUser); // In a real app, you'd send this to your backend
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2">
            Save Changes
          </button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <div className="mb-4">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center">{user.name}</h2>
            <p className="text-center text-gray-600">{user.email}</p>
            <p className="text-center text-gray-600">Role: {user.role}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p>Passionate about exploring Maine's cannabis culture and supporting local businesses. Always on the lookout for the best strains and innovative products!</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">My Interests</h3>
            <ul className="list-disc list-inside">
              <li>Exploring new cannabis strains</li>
              <li>Attending local cannabis events</li>
              <li>Learning about cultivation techniques</li>
              <li>Advocating for responsible use</li>
            </ul>
          </div>
          <button onClick={() => setIsEditing(true)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;