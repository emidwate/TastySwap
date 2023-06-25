import React from 'react';
import { Link } from 'react-router-dom';
import search from '../assets/search-interface-symbol.png';
import basket from '../assets/shopping-basket.png';
import account from '../assets/user.png';

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [burgerClass, setBurgerClass] = React.useState('burger-bar unclicked');
  const [menuClass, setMenuClass] = React.useState('menu hidden');

  const handleSearchClick = () => {
    setIsSearchVisible((prevState) => !prevState);
  };

  const handleMenuClick = () => {
    setBurgerClass((prevClass) =>
      prevClass === 'burger-bar unclicked'
        ? 'burger-bar clicked'
        : 'burger-bar unclicked'
    );
    setMenuClass((prevClass) =>
      prevClass === 'menu hidden' ? 'menu visible' : 'menu hidden'
    );
  };

  return (
    <header>
      <nav className='navbar'>
        <div
          alt='burger-menu'
          className='burger-menu'
          onClick={handleMenuClick}
        >
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
        <div className='logo'>
          <Link to='/' className='logo-styles'>
            TastySwap
          </Link>
        </div>
        <ul className='navbar-items'>
          <div className={menuClass}>
            <Link to='/'>Home</Link>
            <Link to='account'>Account</Link>
            <Link to='basket'>Basket</Link>
          </div>
          <li>
            <Link
              to='#'
              className='navbar-search-link link'
              onClick={handleSearchClick}
            >
              <img
                src={search}
                alt='search-icon'
                className='search-icon icon'
              />
            </Link>
          </li>
          <li>
            <Link to='account' className='navbar-account-link link'>
              <img
                src={account}
                alt='shopping basket'
                className='account-icon icon'
              />
            </Link>
          </li>
          <li>
            <Link to='basket' className='navbar-basket-link link'>
              <img src={basket} alt='shopping basket' className='icon' />
            </Link>
          </li>
        </ul>
      </nav>

      {isSearchVisible && (
        <div className='search-popup'>
          <input type='text' placeholder='Search' className='search-input' />
          <button onClick={handleSearchClick} className='search-btn'>
            Close
          </button>
        </div>
      )}
    </header>
  );
}
