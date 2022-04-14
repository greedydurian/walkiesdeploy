import React from 'react'


const OfferCard = ({imageText, h1Text, bgImage}) => {
  return (
    <div className='relative hover:opacity-80 shadow-md transition-all cursor-pointer  px-3 rounded-2xl hover:scale-105 py-7' >
            <div className={`${bgImage} w-full h-full object-contain bg-cover bg-center text-white font-extrabold text-center `}>
                <h1 className='bg-black opacity-80  '>{imageText}</h1>
                  
            </div>
            
            <div>
                <h1 className='my-2'>{h1Text}</h1>
            </div>
    </div>
  )
};

export default OfferCard;