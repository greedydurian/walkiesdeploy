import React from 'react'
import { AiFillWarning } from 'react-icons/ai'

const DisclosureCard = () => {

  return (
    
    <div className='translate uppercase py-5 break-normal text-center mx-4 space-y-2 font-bold '>
        
    
        <div className= 'bg-center flex items-center justify-center'>
            <div className='text-black text-center uppercase sm:w-3/4 lg:w-2/4 bg-black/10 p-8 rounded-lg'>
              <div className='flex items-center justify-center'>
                <AiFillWarning color='yellow' size="40"></AiFillWarning><h1 className='text-3xl font-black py-2'>FULL DISCLOSURE</h1><AiFillWarning color='yellow' size="40"></AiFillWarning>
              </div>    
               
                <p className='text-xl font-bold py-2 leading-loose'>We are passionate pet owners and NOT a business entity. We are operating this because we love animals. We will NOT be responsible for any pets sick prior to boarding. We will also be doing a full compatibility check to ensure the dogs will get along with each other. </p>
            </div>
        
        </div>
        
    </div>
      
  )
}

export default DisclosureCard;