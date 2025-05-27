import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Digital Marketing Agency</p>
        <div className="mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-green-500 transition-colors duration-300">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-red-500 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-green-500 transition-colors duration-300">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
