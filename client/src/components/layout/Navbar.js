import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <div className='list-unstyled ml-auto'>
        <li>
          <a onClick={onLogout} href='#!'>
            <i className='fas fa-sign-out-alt'>
              <span className='hide-sm'>Logout</span>
            </i>
          </a>
        </li>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav ml-auto'>
          <Link to='/register' className='nav-item nav-link'>
            Register
          </Link>
          <Link to='/login' className='nav-item nav-link'>
            Login
          </Link>
        </div>
      </div>
    </Fragment>
  );

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
      {isAuthenticated ? authLinks : guestLinks}
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
