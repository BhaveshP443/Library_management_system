import React, { useState } from 'react';
import Logo from '../app_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faBook, faUser, faEdit, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const Header = ({
  onAddBookClick,
  onAddBorrowerClick,
  onAddAuthorClick,
  onUpdateBookClick,
  onUpdateBorrowerClick,
  onUpdateAuthorClick,
  onDeleteBookClick,
  onDeleteBorrowerClick,
  onReturnClick,
  onBorrowClick,
  goHome
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleSubOptionClick = (callback) => {
    callback(); // Execute the passed callback (e.g., show a form)
    setIsMobileMenuOpen(false); // Close the mobile menu
    setActiveDropdown(null); // Close any active dropdown
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-red-600 to-yellow-900 p-4 rounded-t-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1
          onClick={goHome}
          className="flex items-center text-blue-300 text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide lg:ml-auto justify-start hover:cursor-pointer focus:cursor-alias"
        >
          <img
            src={Logo}
            alt="Logo"
            className="mr-2 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
          />
          <span>Dashboard</span>
        </h1>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className="text-white text-3xl" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2 ml-auto justify-end">
          {renderMenu(false)}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-800 text-white p-4 mt-4">
          {renderMenu(true)}
        </div>
      )}
    </div>
  );

  function renderMenu(isMobile) {
    const baseClasses = "px-4 py-2 rounded-xl font-semibold";
    const buttonClasses = `${baseClasses} ${
      isMobile ? "bg-blue-600 text-white w-full" : "bg-blue-600 text-white hover:bg-blue-800"
    }`;

    return (
      <>
        {/* New Dropdown */}
        <div className={`relative ${isMobile ? "w-full" : "inline-block"}`}>
          <button
            onClick={() => toggleDropdown('new')}
            className={`${buttonClasses}`}
          >
            <FontAwesomeIcon
              icon={activeDropdown === 'new' ? faAngleUp : faAngleDown}
              className="mr-2"
            />
            New
          </button>
          <div
            className={`${
              activeDropdown === 'new' ? 'block' : 'hidden'
            } ${
              isMobile ? 'mt-2' : 'absolute w-60 mt-2'
            } lg:w-60 w-full bg-white shadow-lg rounded-md`}
          >
            <div className="py-1">
              <button
                onClick={() => handleSubOptionClick(onAddBookClick)}
                className="flex lg:w-60 w-full items-center justify-center px-4  py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faBook} className="mr-2" /> Add New Book
              </button>
              <button
                onClick={() => handleSubOptionClick(onAddAuthorClick)}
                className="flex lg:w-60 w-full items-center justify-center px-2 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Add New Author
              </button>
              <button
                onClick={() => handleSubOptionClick(onAddBorrowerClick)}
                className="flex lg:w-60 w-full items-center justify-center px-2 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Add New Borrower
              </button>
            </div>
          </div>
        </div>

        {/* Update Dropdown */}
        <div className={`relative ${isMobile ? "w-full" : "inline-block"}`}>
          <button
            onClick={() => toggleDropdown('update')}
            className={`${buttonClasses}`}
          >
            <FontAwesomeIcon
              icon={activeDropdown === 'update' ? faAngleUp : faAngleDown}
              className="mr-2"
            />
            Update
          </button>
          <div
            className={`${
              activeDropdown === 'update' ? 'block' : 'hidden'
            } ${
              isMobile ? 'mt-2' : 'absolute w-60 mt-2'
            } lg:w-60 w-full bg-white shadow-lg rounded-md`}
          >
            <div className="py-1 ">
              <button
                onClick={() => handleSubOptionClick(onUpdateBookClick)}
                className="flex lg:w-60 w-full items-center justify-center px-2 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" /> Update Book Details
              </button>
              <button
                onClick={() => handleSubOptionClick(onUpdateAuthorClick)}
                className="flex lg:w-60 w-full items-center justify-center px-2 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" /> Update Author Details
              </button>
              <button
                onClick={() => handleSubOptionClick(onUpdateBorrowerClick)}
                className="flex lg:w-60 w-full items-center justify-center px-2 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" /> Update Borrower Details
              </button>
            </div>
          </div>
        </div>

        {/* Delete Dropdown */}
        <div className={`relative ${isMobile ? "w-full" : "inline-block"}`}>
          <button
            onClick={() => toggleDropdown('delete')}
            className={`${buttonClasses} text-red-400`}
          >
            <FontAwesomeIcon
              icon={activeDropdown === 'delete' ? faAngleUp : faAngleDown}
              className="mr-2"
            />
            Delete
          </button>
          <div
            className={`${
              activeDropdown === 'delete' ? 'block' : 'hidden'
            } ${
              isMobile ? 'mt-2' : 'absolute mt-2'
            } bg-white shadow-lg rounded-md`}
          >
            <div className="py-1">
              <button
                onClick={() => handleSubOptionClick(onDeleteBookClick)}
                className="flex lg:w-40 w-full items-center justify-center px-2 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete Book
              </button>
              <button
                onClick={() => handleSubOptionClick(onDeleteBorrowerClick)}
                className="flex lg:w-40 w-full items-center justify-center px-2 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete Borrower
              </button>
            </div>
          </div>
        </div>

        {/* Return and Borrow */}
        <button
          onClick={() => handleSubOptionClick(onReturnClick)}
          className={`${buttonClasses} bg-blue-600 text-white`}
        >
          <FontAwesomeIcon icon={faCheck} className="mr-2" /> Book Return
        </button>
        <button
          onClick={() => handleSubOptionClick(onBorrowClick)}
          className={`${buttonClasses} bg-blue-600 text-white`}
        >
          <FontAwesomeIcon icon={faCheck} className="mr-2" /> Book Borrow
        </button>
      </>
    );
  }
};

export default Header;
