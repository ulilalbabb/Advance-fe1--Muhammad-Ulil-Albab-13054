import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userData");
}


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full text-sm font-medium text-white bg-transparent hover:bg-gray-700 focus:outline-none"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <svg
            className="w-4 h-4 lg:w-7 lg:h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 w-[150px] mt-2 origin-top-right bg-navbar divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-600"
              role="menuitem"
            >
              <img src="../assets/profile.png" alt="" className='h-4'/>
              Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-600"
              role="menuitem"
            >
              <img src="../assets/star.png" alt="" />
              Ubah Premium
            </a>
            <div className='flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-600'>
              <img src="../assets/out.png" alt="" />
              <Link to="/login" onClick={handleLogout}>
              Keluar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
