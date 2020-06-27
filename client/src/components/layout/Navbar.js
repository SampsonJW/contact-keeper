import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title, icon }) {
  return (
    <nav
      className='navbar navbar-expand-sm navbar-dark'
      style={{ backgroundColor: '#93D8E5' }}
    >
      <Link to='/' className='navbar-brand' style={{ color: '#ffff' }}>
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav'>
          <Link to='/' className='nav-item nav-link'>
            Home
          </Link>
          <Link to='/About' className='nav-item nav-link'>
            About
          </Link>
        </div>
        <div className='navbar-nav ml-auto'>
          <Link to='/register' className='nav-item nav-link'>
            Register
          </Link>
          <Link to='/login' className='nav-item nav-link'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: '  Contact Keeper',
  icon: 'far fa-address-card',
};
export default Navbar;
