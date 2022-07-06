import React from 'react';
import TextBox from '../TextBox';

function Showrooms() {
  const heading = 'Showrooms';
  const showroomItems = [
    {
      name: 'Brisbane',
      address: 'Unit 2, 25 Dunhill \r\nCrescent, Morningside \r\nQLD 4170',
      phone: '(07) 3257 7272',
    },
    {
      name: 'Melbourne',
      address: '34 Assembly Drive\r\nTullamarine\r\nVIC 3043',
      phone: '(03) 7035 9130',
    },
    {
      name: 'Sydney',
      address: '19/36 O’Riordan St\r\nAlexandria\r\nNSW 2015',
      phone: '(02) 9194 4120',
    },
  ];

  return (
    <div className='show-room-wrapper'>
      <TextBox heading={heading} />
    </div>
  );
}

export default Showrooms;
