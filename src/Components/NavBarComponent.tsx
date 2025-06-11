import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from "@/assets/Logo.png"
import React from 'react'

const NavBarComponent = () => {
    const router = useRouter();


    const handleOpenHome = () => {
        router.push('/')
    }

    const handleOpenSkills = () => {
        router.push('/Skills')
    }

    const handleOpenProjects = () => {
        router.push('/Projects')
    }

    const handleOpenInformation = () => {
        router.push('/Information')
    }


  return (
    <div className='bg-emerald-700 h-25 w-full'>
    <div className='flex justify-between items-center text-2xl h-full'>
        <div className=''>
            <Image 
                src={Logo} 
                alt='Logo' 
                priority
                className='h-[100px] w-[200px]' 
                
            />
        </div>
        <div className='flex items-center gap-20 px-10'>
            <button className='cursor-pointer hover:text-emerald-200 transition-all text-center' onClick={handleOpenHome}>
                Home
            </button>
            <button className='cursor-pointer hover:text-emerald-200 transition-colors' onClick={handleOpenSkills}>
                Skills
            </button>
            <button className='cursor-pointer hover:text-emerald-200 transition-colors' onClick={handleOpenProjects}>
                Projects
            </button>
            <button className='cursor-pointer hover:text-emerald-200 transition-colors' onClick={handleOpenInformation}>
                Information
            </button>
        </div>
    </div>
</div>
  )
}

export default NavBarComponent