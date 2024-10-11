import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Leaf, LogOut, UserPlus, Settings } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const Header: React.FC = () => {
  const { user, logout } = useUser();

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Leaf className="mr-2" />
          MaineGreen Connect
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="flex items-center hover:text-green-200">
                <Home className="mr-1" size={18} />
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="flex items-center hover:text-green-200">
                    <User className="mr-1" size={18} />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/directory" className="flex items-center hover:text-green-200">
                    <Leaf className="mr-1" size={18} />
                    Directory
                  </Link>
                </li>
                {user.role === 'admin' && (
                  <li>
                    <Link to="/admin" className="flex items-center hover:text-green-200">
                      <Settings className="mr-1" size={18} />
                      Admin
                    </Link>
                  </li>
                )}
                <li>
                  <button onClick={logout} className="flex items-center hover:text-green-200">
                    <LogOut className="mr-1" size={18} />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="flex items-center hover:text-green-200">
                    <User className="mr-1" size={18} />
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="flex items-center hover:text-green-200">
                    <UserPlus className="mr-1" size={18} />
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;