import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

function ContactForm() {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary text-center mt-3'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <div>
        <input
          className='form-control my-3'
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          className='form-control my-3'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          className='form-control my-3'
          type='phone'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={onChange}
        />
      </div>
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />
      Professional{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block my-3'
        ></input>
      </div>
      {current && (
        <button className='btn btn-light btn-block' onClick={clearAll}>
          Clear
        </button>
      )}
    </form>
  );
}

export default ContactForm;
