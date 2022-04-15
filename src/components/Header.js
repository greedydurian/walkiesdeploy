import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {HiArrowNarrowDown, HiArrowNarrowUp} from 'react-icons/hi';
import { Transition } from "@headlessui/react";


const style = {

    headerItem: `text-black  px-1.5 font-bold text-black hover:text-[#8a939b] cursor-pointer`,
    headerIcon: `text-black text-3xl font-black px-4 hover:text-[#8a939b] cursor-pointer`,

}

const Header = () => {
const [isOpen, setIsOpen] = useState(false);
return(

<div className='bg-white py-[0.7rem] md:flex w-screen px-[3.2rem]'>

            <div className='font-bold ml-[0.8rem] text-[#5AFF3D] font- bold text-2xl font-mono'>

                <Link to='/'><span className='font-bold ml-[0.8rem] text-black font- bold text-2xl font-mono text-center'>Walk</span>ies </Link>
            </div>

            <div className='flex flex-1 mx-[1.2rem] w-max-[520px] items-center uppercase justify-end font-mono gap-8 hidden md:inline-flex'>
                <div className='flex items-baseline space-x-5'>
                    <Link to='/'><div className={style.headerItem}>Home</div></Link>
                    <Link to='/about'><div className={style.headerItem}>About</div></Link>
                    <Link to='/offer'><div className={style.headerItem}>Offerings</div></Link>
                    <Link to='/disclosure'><div className={style.headerItem}>Disclosure</div></Link>
                    <Link to='/contact'><div className={style.headerItem}>Contact</div></Link>
                    <Link to='/faq'><div className={style.headerItem}>FAQ</div></Link>
                </div>
            </div>

            <div className="flex md:hidden items-right">
              <button className=" mx-auto">
                
                {!isOpen ? (
                  <HiArrowNarrowDown
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden block w-10 h-10 p-2 cursor-pointer"
                />
              ) : (
                <HiArrowNarrowUp
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden block w-10 h-10 p-2 cursor-pointer"
                />
                )}
              </button>
            </div>
            <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden md:inline-flex text-center justify-center">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <Link to='/'><div className={style.headerItem}>Home</div></Link>
                <Link to='/about'><div className={style.headerItem}>About</div></Link>
                <Link to='/offer'><div className={style.headerItem}>Offerings</div></Link>
                <Link to='/disclosure'><div className={style.headerItem}>Disclosure</div></Link>
                <Link to='/contact'><div className={style.headerItem}>Contact</div></Link>
                <Link to='/faq'><div className={style.headerItem}>FAQ</div></Link>
            </div>
          </div>
        )}
      </Transition>

</div>

    )

};

export default Header;
