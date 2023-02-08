import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <>
      <Phonebook
        initialContacts={[
          { id: 'id-1', name: 'Annie Simpson', number: '234-22-69' },
          { id: 'id-2', name: 'Elize Kline', number: '661-58-90' },
          { id: 'id-3', name: 'Dimitre Clements', number: '803-67-40' },
          { id: 'id-4', name: 'Andronik Copeland', number: '90-527-56' },
        ]}
        initialFilter={''}
      />
    </>
  );
};
