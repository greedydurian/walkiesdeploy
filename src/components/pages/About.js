import Card from '../elements/Card.js';
// import Card1 from '../elements/Card1.js';
// import Card2 from '../elements/Card2.js';
import Header from '../Header.js'
import { AiFillInstagram } from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'


import React from 'react'

const About = () => {
  return (
      <div>
            <Header/>
            <div className='grid place-items-center p-10'>
                <Card />
            </div>
            <div className='grid place-items-center p-10 '>

              <div className="flex flex-row space-x-4">
                <a href="https://www.instagram.com"
                  className="IG">
                  <AiFillInstagram color='purple' size="40"/>
                </a>
              
              
                  <a href="https://www.telegram.com"
                  className="telegram">
                  <FaTelegram color='blue' size="40"/>
                </a>
            </div>
</div>
      </div>
      
  )
}

export default About; 