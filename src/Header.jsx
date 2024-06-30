import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = ({ scrollToFirstPage, scrollToSecondPage, scrollToThirdPage, scrollToFourthPage }) => {

  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className='md:pl-10 fixed z-10 bg-neutral-700 w-screen  py-8 flex md:flex-row flex-col  md:justify-start justify-evenly items-center'>

      <div className='flex justify-evenly items-center '>

      <div className='flex justify-center items-center '>
        <div className='ml-0 md:ml-36 text-yellow-500 text-2xl md:text-5xl font-extrabold'>
          <h1>the Coder Boy</h1>
        </div>
      </div>

      <div className='md:hidden ml-12'>
          <button onClick={toggleItems} className='text-xl text-white font-semibold px-4 py-2 bg-gray-800 rounded-lg'>
            {showItems ? <RxCross2/> : <CiMenuBurger/>}
          </button>
      </div>

      </div>

      <div className={`md:flex ${showItems ? 'block' : 'hidden'} md:ml-8 md:mt-0 mt-6 ml-[80%] w-screen md:w-[40%]`}>
        <ul className='mt-6 md:mt-50 lg:mt-0 w-full  md:flex md:justify-evenly justify-center items-center  text-neutral-300 text-2xl font-serif font-semibold'>
         
          <li className='mt-3' onClick={toggleItems}><button  onClick={scrollToFirstPage}>Home</button></li>
          <li className='mt-3' onClick={toggleItems}><button onClick={scrollToSecondPage}>Skill</button></li>
          <li className='mt-3' onClick={toggleItems}><button onClick={scrollToThirdPage}>Portfolio</button></li>
          <li className='mt-3' onClick={toggleItems}><button onClick={scrollToFourthPage}>Contact</button></li>
        </ul>
      </div>

    </div>
  );
}

export default Header;
