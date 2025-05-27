import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white p-6 mt-auto"> {/* Increased padding slightly */}
      <div className="container mx-auto text-center">
        <p className="font-poppins">&copy; {currentYear} Digital Marketing Agency</p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Links stack vertically on small screens (default), row on sm and up */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-poppins text-sm hover:text-green-500 transition-colors duration-300">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-poppins text-sm hover:text-red-500 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-poppins text-sm hover:text-green-500 transition-colors duration-300">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
