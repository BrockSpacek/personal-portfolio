'use client';
import Image from 'next/image';
import ProfileImage from '@/assets/02-CSAs7_Headshots.jpg';
import React, { useEffect, useState } from 'react';
import NavBarComponent from '@/Components/NavBarComponent';
import InstaLogo from "@/assets/icons8-instagram-96.png";
import LinkedInLogo from "@/assets/icons8-linkedin-96.png";
import GitHubLogo from "@/assets/icons8-github-100.png";

const Page = () => {

const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setIsLoaded(true), 10);
  return () => clearTimeout(timer);
}, []);
  
  const useAdvancedTypewriter = (strings: string[], speed: number = 100, deleteSpeed: number = 50, pauseTime: number = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [stringIndex, setStringIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentString = strings[stringIndex];
      
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          if (charIndex < currentString.length) {
            setDisplayText(currentString.substring(0, charIndex + 1));
            setCharIndex(prev => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentString.substring(0, charIndex - 1));
            setCharIndex(prev => prev - 1);
          } else {
            setIsDeleting(false);
            setStringIndex(prev => (prev + 1) % strings.length);
          }
        }
      }, isDeleting ? deleteSpeed : speed);

      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, stringIndex, strings, speed, deleteSpeed, pauseTime]);

    return displayText;
  };

  const personalInfo = {
    name: 'Brock Spacek',
    title: 'Full Stack Web Developer',
  };

  // Typewriter Text
  const titles = [
    'FULL STACK WEB DEVELOPER',
    'Software Engineer',
    'REACT SPECIALIST', 
    'NEXT.JS EXPERT',
    'PROBLEM SOLVER'
  ];
  
  const typedTitle = useAdvancedTypewriter(titles, 80, 40, 1500);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '1', label: 'Year Experience' },
    { number: '∞', label: 'Learning Capability' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBarComponent />
      
      {/* Hero Section */}
      <section className=" pt-20 pb-10 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TypeWriter */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold">
                I&apos;m <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              
              <div className="relative inline-block">
                <div className="bg-emerald-400 w-[500px] text-black px-6 py-3 text-xl lg:text-2xl font-bold uppercase tracking-wider transform min-h-[60px] flex items-center">
                  I&apos;M A <span className="ml-2">{typedTitle}</span>
                  <span className="ml-1 text-2xl">|</span>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <button className="group border border-gray-400 px-8 py-3 text-lg hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300 flex items-center gap-3 cursor-pointer">
              Contact Me
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Stats */}
            <div className="flex gap-12 pt-8 ">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className={`h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-1000 origin-left ${isLoaded ? 'scale-x-100' : 'scale-x-0'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Background and Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-0 right-0 w-96 h-96 lg:w-[500px] lg:h-[600px] bg-emerald-400 rounded-tl-[100px] -z-10"></div>
            
            {/* Profile Image */}
            <div className="relative w-80 h-96 lg:w-[450px] lg:h-[550px] overflow-hidden rounded-tl-[80px] shadow-2xl">
              <Image
                src={ProfileImage}
                alt="Brock Spacek"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="lg:absolute lg:top-12 lg:right-12 lg:w-8 lg:h-8 lg:bg-emerald-400 lg:rotate-45"></div>
            <div className="lg:absolute lg:bottom-12 lg:right-0 lg:w-6 lg:h-6 lg:bg-white lg:rounded-full"></div>
            <div className="lg:absolute lg:bottom-20 lg:right-8 lg:w-4 lg:h-4 lg:bg-emerald-400 lg:rounded-full"></div> 
          </div>
        </div>     
      </section>

      <div className='flex justify-center w-1/2 mx-auto gap-3 py-7'>  
            <Image src={InstaLogo} alt="Instagram Logo" className='h-20 w-20 cursor-pointer' />
            <Image src={GitHubLogo} alt="GitHub Logo" className='h-16 w-16 bg-white rounded-full cursor-pointer mt-2'/>
            <Image src={LinkedInLogo} alt="LinkedIn Logo" className='h-20 w-20 cursor-pointer'/>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm pb-6 px-4">
        © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, Tailwind CSS & Flowbite.
      </footer>
    </div>
  );
};

export default Page;