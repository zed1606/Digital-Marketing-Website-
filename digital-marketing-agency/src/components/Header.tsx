import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Digital Marketing Agency</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="/about" className="hover:text-green-500">About</Link></li>
          <li><Link href="/services" className="hover:text-green-500">Services</Link></li>
          <li><Link href="/contact" className="hover:text-green-500">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
