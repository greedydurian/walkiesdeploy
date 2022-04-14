import React from 'react'
import Header from '../Header.js'
import DisclosureCard from '../elements/DisclosureCard.js';

const Disclosure = () => {
  return (
    <div>
        <Header/>
        <div className='translate uppercase py-5 break-normal text-center mx-4 space-y-2 font-bold '>
        
          <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
          Life is better
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative block">
            <span class="relative text-white">WITH</span>
            </span>
          a dog
          </blockquote>
        
        
        </div>
        <DisclosureCard/>
    </div>
  )
};

export default Disclosure;