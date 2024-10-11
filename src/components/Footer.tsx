import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 MaineGreen Connect. All rights reserved.</p>
        <p className="mt-2">Connecting Maine's cannabis community and businesses.</p>
        <p className="mt-2 text-sm">Must be 21+ to use. Please consume responsibly.</p>
      </div>
    </footer>
  );
};

export default Footer;