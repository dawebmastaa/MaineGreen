import React from 'react';
import { useUser } from '../contexts/UserContext';
import { User } from '../types/user';

const AdminDashboard: React.FC = () => {
  const { user } = useUser();

  // Mock user data - in a real app, this would come from your backend
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'consumer' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'business' },
    { id: '3', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  ];

  if (user?.role !== 'admin') {
    return <div>Access denied. Admin privileges required.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-green-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;