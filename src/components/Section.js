import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const style = {
    background: 'bg-image w-full h-screen bg-cover bg-center flex items-center justify-center',
    textBackground:'text-black text-center uppercase lg:w-3/4 bg-black/10 p-10 rounded-lg mb-[15%]',
    textFont:'text-xl font-black py-2',
    textFontp:'text-xl font-bold py-2'
}

const Section = () => {
    return(
        <div className={style.background} >
            <div className={style.textBackground}>
                <h1 className={style.textFont}>Join the best dog sitting club in da world</h1>
                <h2>We cater to all your needs</h2>
                <p className={style.textFontp}>To find out more, click the button below </p>
               
                <div className='mt-6'>
                    <Link  to='/offer'><Button variant='outlined' onClick={()=> window.location.href='/offer'}>
                    Click here to find out more!
                    </Button></Link>
                </div>
            </div>
       
      
        </div>
    )
}


export default Section; 