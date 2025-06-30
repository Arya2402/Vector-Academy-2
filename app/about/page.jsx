import React from 'react';
import Slogan from './Slogan';
import AboutUs from './AboutUs';
import Album from './Album';

export default function Page() {
  return (
  <div className='bg-white'>
      <AboutUs/>
      <Slogan />
      <Album />
</div>
  );
}
