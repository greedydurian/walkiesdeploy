import Header from '../Header.js';
import ParticlesBg from 'particles-bg';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';



const Contact = (props) => {
    

    const form=useRef();
    const [open, setOpen] = React.useState(false);
  
    const handleClose = (event, reason) => {
    setOpen(false);
    };
  
    const handleClick = () => {
    setOpen(true);
    };

    const sendEmail =(e) => {e.preventDefault();
    

    emailjs.sendForm('service_ok08ouw', 'template_4x46ecm', form.current, 'QOC8GG9hGrgUbYieN')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
   
};

    return(
      
        <div>
            <ParticlesBg type="ball" bg={true} />
            <Header/>
            
            <div className='flex w-full min-h-screen justify-center items-center'>
                
                    <div className='bg-white rounded-xl p-3 text-black'>
                        <div className='flex flex-col space-y-4 bg-white w-full max-w-2xl p-4 rounded-xl'>
                            <div className='flex flex-col justify between'>
                            
                                <div className='font-bold text-4xl tracking-wide'>
                                    
                                    <h1>Contact Us</h1>
                                    <p className='pt-3 text-sm'>Drop us a message and we'll get back to you shortly!</p>
                                    
                                </div>
                            
                            </div>  
                        <div>
                        
                        <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col space-y-3'>
                            
                            <div>
                                <label for='' className='text-sm'>Your name</label>
                            </div>
                            <div>
                                <input type='Text' name='user_name' placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2'></input>
                            </div>

                            <div>
                                <label for='' className='text-sm'>Your email</label>
                            </div>
                            <div>
                                <input type='Text' name='user_email' placeholder='Your Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2'></input>
                            </div>

                            <div>
                                <label for='' className='text-sm'>Message</label>
                            </div>
                            <textarea rows='5' placeholder='Message' name='message' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2'></textarea>

                            {/* <Button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium
                            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-indigo-500">Send Message</Button> */}
                            <Button type='submit' variant='contained' onClick={handleClick}>Submit</Button>
                            <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                                message="Your message has been sent"

                            />
                            

                        </div>
                        </form>
                    </div>     
                 
                </div>    
                
                </div>
            </div>
        </div>

    )
}


export default Contact; 