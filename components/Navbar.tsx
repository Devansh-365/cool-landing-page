
import Image from 'next/image';
import React from 'react';

type NavbarProps = {
  
};

const Navbar:React.FC<NavbarProps> = () => {
  
  return (
    <div className='relative bg-white z-50 w-11/12 max-w-6xl'>
      <div className='flex justify-between items-center gap-8 py-4  w-full'>
        <div className='flex lg:w-48'>
          <Image width={32} height={32} src='/logo.png' />
          <span className='font-bold text-xl'>Logo</span>
        </div>
        <ul className='hidden items-center whitespace-nowrap text-base text-neutral-700 hover:text-neutral-900 md:flex gap-8 list-none'>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
        </ul>
        <div className='hidden item-center gap-4 md:flex'>
          <button className='whitespace-nowrap text-base font-bold text-neutral-700 hover:text-gray-900"'>Log in</button>
          <button className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-neutral-900 hover:bg-neutral-700'>Sign up</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar;