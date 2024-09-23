import Header from './Header';
import Image from 'next/image';
import sword from './assets/imgs/swordr.gif';
import { Inter, Rubik, PT_Serif, Source_Sans_3, Source_Code_Pro} from '@next/font/google';
import clsx from 'clsx';


export const title = Source_Sans_3({
    subsets: ['latin'],
    weight: ['400','700'],
  });
  

export default function Hero() {
      return (
         <>
             <section className="hero-section z-10 items-center font-mono text-sm flex flex-col mx-auto px-6">
                  <div className="hero-text-container grid grid-cols-2 items-center justify-center gap-7 mt-4 b mt-[75px] md:mt-[100px] pb-10 lg:mt-[125px] w-[90%] min-w-[330px] max-w-full mx-auto md:max-w-[668px] lg:max-w-[1280px] md:min-w-[668px] lg:min-w-[90%] min-h-[70vh] bg-black">
                     <div className="min-h-[100%] grid grid-cols-4">
                        <div className='bg-[#fff] border-r'></div>
                        <div className='bg-[#fff] border-r'></div>
                        <div className='bg-[#fff] border-r'></div>
                        <div className='bg-[#fff] border-r'></div>
                     </div>
                     <div className='min-h-[100%]'>
                     <button className={clsx("CTA text-white text-xl mt-[5px]", title.className)}>Get Started</button>
                     </div>
                  </div>
               </section>
         </>
      )
}