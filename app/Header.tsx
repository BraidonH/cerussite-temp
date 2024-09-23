'use client'

import Image from "next/image";
import close from './assets/imgs/close.png';
import logo from './assets/imgs/cerus_2k.png';
import LogoHighDef from './assets/imgs/cerus_2k.png';
import hamburger from './assets/imgs/hamburger-red.svg';
import {useState} from 'react';

export default function Header() {
         const [toggle, setToggle] = useState(false);

        function dropdown() {
          const dropdown = document.querySelector('.dropdown');

          if(toggle == false) {
            dropdown?.classList.remove('dropdown-closed')
            dropdown?.classList.add('dropdown-open')
            document.body.style.overflow = "hidden"
            setToggle(!toggle);
          } else {
            setToggle(!toggle)
            dropdown?.classList.remove('dropdown-open')
            dropdown?.classList.add('dropdown-closed')
            document.body.style.overflow = ""
          } 
        }

     


    return (
        <div className="flex justify-center fixed top-0 z-[100]">
          
             <header className="bg-[#000] min-w-[100vw] flex items-center justify-center border-b-2 border-red-900 fixed left-0 md:hidden">
              <div className="max-w-[390px] min-w-[330px] flex self-center justify-between">
                <div className="">
                  <Image className="rounded-lg object-cover" src={logo} alt="cerus logo" width="60" height="60"/>
                </div>
                <Image className="hamburger rounded-lg" src={hamburger} alt="hamburger icon" width="40" height="40" onClick={dropdown}/>
              </div>
              </header>
              <header className="hidden md:flex items-center justify-center bg-[#000] min-w-[100vw] min-h-[75px]">
                <div className="md:min-w-[668px] lg:min-w-[1280px] flex justify-around items-center">
                <div className="flex gap-10">
                  <a href="/about" className="text-white text-xl">About</a>
                  <a className="text-white text-xl">Partners</a>
                </div>
                <a href="/">
                  <Image className="" src={LogoHighDef} alt="high def cerus logo" width="50" height="50"/>
                </a>
                <div className="flex gap-10">
                  <a className="text-white text-xl">Gallery</a>
                  <a className="text-white text-xl">Contact</a>
                </div>
                </div>
              </header>
          </div>
    )
}