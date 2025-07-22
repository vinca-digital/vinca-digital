import React from 'react';

const NavbarAdmin = () => {
  return (
    <nav className="w-full h-16 bg-vinca-dark text-white border-b border-gray-800 flex items-center justify-between px-6 fixed top-0 left-0 z-50">
      {/* Logo & Titre */}
      <div className="flex items-center gap-4">
        <img src="/logo princ.png" alt="Logo" className="h-10 w-10 rounded-full" />
        <span className="text-xl font-bold text-white tracking-wide">Admin Panel</span>
      </div>
      {/* Menu utilisateur */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium transition">
          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Admin
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800 transition" title="Notifications">
          <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default NavbarAdmin; 