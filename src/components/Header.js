import React from "react";
import { Link } from 'react-router-dom'

const style = {
    wrapper: `bg-white py-[0.7rem] flex w-screen px-[3.2rem]  `,
    headerText: ` font-bold ml-[0.8rem] text-[#5AFF3D] font- bold text-2xl font-mono `,
    headerText1: ` font-bold ml-[0.8rem] text-black font- bold text-2xl font-mono `,
    headerItems: ` flex flex-1 mx-[1.2rem] w-max-[520px] items-center items-center uppercase justify-end font-mono gap-8`,
    headerItem: `text-black  px-1.5 font-bold text-black hover:text-[#8a939b] cursor-pointer`,
    headerIcon: `text-black text-3xl font-black px-4 hover:text-[#8a939b] cursor-pointer`,
  }
  

const Header = () => {
    return(
        <div className={style.wrapper}>
            
            <div className={style.headerText}>
                
                <Link to='/'><span className={style.headerText1}>Walk</span>ies </Link>
            </div>
            <div className={style.headerItems}>
                <Link to='/'><div className={style.headerItem}>Home</div></Link>
                <Link to='/about'><div className={style.headerItem}>About</div></Link>
                <Link to='/offer'><div className={style.headerItem}>Offerings</div></Link>
                <Link to='/disclosure'><div className={style.headerItem}>Disclosure</div></Link>
                <Link to='/contact'><div className={style.headerItem}>Contact</div></Link>
                <Link to='/faq'><div className={style.headerItem}>FAQ</div></Link>
            </div>
            
        </div>

            
    
    )
}


export default Header; 