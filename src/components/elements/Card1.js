import React, {useState} from 'react'

 

const Card = () => {
  const[text, setText] =useState('original')
  const [buttonText, setButtonText] = useState("Original");

  return (
    
      <div className='translate uppercase py-5 break-normal text-center mx-4 space-y-2 font-bold'>
        

        <div className="App">
            <button className='rounded-full border-black border-solid'
            type="submit"
            onClick={() => {
            setButtonText("New");
            setText('New')
            
        }}
        
      >
        
        {buttonText}
        
      </button>
    </div>
        <h2>{text}</h2>
        
      </div>
      
  )
}

export default Card;