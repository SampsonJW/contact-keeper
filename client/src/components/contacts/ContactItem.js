import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

function ContactItem({ contact }) {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    clearCurrent();
    deleteContact(id);
  };

  return (
    <div className='card bg-light my-3'>
      <h5 className='text-primary text-left ml-3 my-3'>
        {name}{' '}
        <span
          className={
            'float-right mr-3 badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h5>
      <ul className='list-unstyled ml-3'>
        {email && (
          <li className='mb-2'>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li className=''>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm mx-3'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
