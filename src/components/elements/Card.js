import React, {useState} from 'react'
import Switch from '@mui/material/Switch';
 

const Card = () => {
  const[toggle, setToggle] =useState(false)
  const toggler = () => {
      toggle ? setToggle(false) : setToggle(true)
  }


  return (
    <div className='relative hover:opacity-80 shadow-md transition-all cursor-pointer py-10 px-20 bg-lime-300 rounded-2xl p-8 bg-opacity-70'>
      <div className='bg-profImage bg-cover bg-center rounded-full shadow-sm w-40 h-40 flex items-center mx-auto'>

      </div>

      <div className='translate uppercase py-5 break-normal text-center mx-4 space-y-2 font-bold'>
        <h1>Hello! My name is Taco. I will be your host!</h1>

        {/* <p>I am a Maltipoo from Singapore. I love the outdoors and am always ready for an adventure. I'm also known to be a glutton. Scavenging for food during my walks is part of my hobby. Other hobbies include chewing on my bully stick. I love durian and peanut butter as well.
        Do contact contact us if you want to find out more!</p> */}
        <div>
            {toggle ? <h1>I am a Maltipoo from Singapore. I love the outdoors and am always ready for an adventure. I'm also known to be a glutton. Scavenging for food during my walks is part of my hobby. Do contact us if you want to find out more! My instagram is down below:</h1> : <h1>woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof</h1>}
           
            <Switch onClick={toggler }/>
        </div>
        
        
      </div>
      
      

    </div>
  )
}

export default Card;