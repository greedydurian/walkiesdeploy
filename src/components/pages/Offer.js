import React from 'react'
import OfferCard from '../elements/OfferCard';
import Header from '../Header'


const Offer = () => {

  return (
    <div>
        <Header/>
          
        <div className='w-full h-screen bg-white grid place-items-center lg:grid-cols-2 font-serif text-sm text-center font-bold children:w-11/12 children:h-5/6 my-8'>
            <OfferCard imageText='Bathing' h1Text='Baths once per week' bgImage='bg-bathingImage'/>
            <OfferCard imageText='Eating' h1Text='Yummy healthy food twice a day!' bgImage='bg-eatingImage'/>
            <OfferCard imageText='Sleeping' h1Text='Your dog will enjoy a nice snooze' bgImage='bg-sleepingImage'/>
            <OfferCard imageText='Walking' h1Text='Walkies twice a day!' bgImage='bg-walkingImage'/>
        </div>
        
    </div>
  )
};

export default Offer;