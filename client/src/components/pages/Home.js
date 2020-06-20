import React, { Fragment } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

function Home() {
  return (
    <div style={gridStyle}>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem',
};
export default Home;
