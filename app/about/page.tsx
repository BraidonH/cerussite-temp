import Image from "next/image";
import Header from "../Header";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <Header />
      <div className="z-10 w-full md:w-[668px] lg:w-[1024px] items-start justify-between font-mono text-lg flex flex-col gap-10 lg:flex mx-auto">
        <h1 className="text-white">What are we about?</h1>
        <h1 className="text-white">What can we offer?</h1>
      </div>
    </main>
  );
} 
