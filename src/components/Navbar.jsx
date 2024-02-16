import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar({ active }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const mobileMenuStyles = `${mobileMenu ? 'max-h-screen' : 'max-h-0'} overflow-hidden md:max-h-screen`;
  const activeLinkStyles = 'text-white font-semibold md:border-purple-500 md:border-b-[5px] md:bg-white md:text-purple-500 bg-purple-500';
  const defaultLinkStyles = 'p-3 hover:bg-slate-100 hover:text-gray-500 px-10 md:px-3';

  const mainIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-max h-10">
      <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
    </svg>
  );

  const menuIcon = () => {
    return mobileMenu ? (

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    ) : (

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    )
  };

  return (
    <div className="flex sticky top-0 flex-col md:flex-row justify-between md:items-center lg:px-72  border-gray-300 border-b-[1px]">
      <nav className="lg:flex md:flex-row sm:flex-col text-black px-20">
        <div className="flex bg-gray p-2 justify-between w-full">
          <div className="flex flex-row">
            <span className="text-purple-700 text-2xl">
              {mainIcon}
            </span>
          </div>
          <button className="md:hidden" onClick={toggleMobileMenu} data-collapse-toggle="navbar-default">
            <span>{menuIcon()}</span>
          </button>
        </div>
      </nav>

      <div className={mobileMenuStyles} id="navbar-default">
        <ul className="md:flex md:flex-wrap lg:mt-0 md:mt-0">
          <Link to='/' >
            <li className={`${active === "home" ? activeLinkStyles : ''} ${defaultLinkStyles}`}>
              Home
            </li>
          </Link>
          <Link to='/docs' >
            <li className={`${active === "docs" ? activeLinkStyles : ''} ${defaultLinkStyles}`}>
              Docs
            </li>
          </Link>
          <Link to='/profile' >
            <li className={`${active === "profile" ? activeLinkStyles : ''} ${defaultLinkStyles}`}>
              Profile
            </li>
          </Link>
          <Link to='/' >
            <li className={`${active === "about" ? activeLinkStyles : ''} ${defaultLinkStyles}`}>
              About
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  active: PropTypes.string.isRequired
};

export default Navbar;
