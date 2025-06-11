import Image from 'next/image';
import { useRouter } from 'next/navigation';
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


  return (
    <div className='bg-emerald-700 h-20 w-full'>
    <div className='flex justify-end gap-20 items-center text-2xl h-full'>
        <div>
            {/* <Image src={} alt='Logo' /> */}
        </div>
        <div className='flex items-center gap-20 px-10'>
            <button className='cursor-pointer' onClick={handleOpenHome}> Home </button>
            <button> Skills </button>
            <button> Projects </button>
            <button> Information</button>
        </div>
    </div>
</div>
  )
}

export default NavBarComponent