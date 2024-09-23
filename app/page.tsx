'use client'

import Image from "next/image";
import hamburger from './assets/imgs/menu.png';
import close from './assets/imgs/close.png';
import { Inter, Rubik, PT_Serif, Source_Sans_3, Source_Code_Pro} from '@next/font/google';
import { useState } from 'react';
import Header from "./Header";
import Hero from './Hero';





export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden flex flex-col bg-[#222]">
      <Header />
      <Hero />
    </main>
  );  
}


