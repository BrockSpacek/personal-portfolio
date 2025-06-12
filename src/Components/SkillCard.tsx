import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'

interface SkillCardProps {
  logo: StaticImageData | string;
  title: string;
  description?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  logo, 
  title, 
  description = "", 
}) => {
  return (
    <div className="
      bg-slate-800 border-emerald-400 text-white rounded-2xl border-2 backdrop-blur-sm bg-opacity-90 hover:scale-105 hover:bg-opacity-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-emerald-400/20 group cursor-pointer overflow-hidden relative">
      
      <div className='relative p-6'>
        <div className='flex justify-center mb-4'>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
            <Image 
              src={logo} 
              alt={`${title} Logo`} 
              className='h-20 w-20 object-contain transition-all duration-300'
            />
          </div>
        </div>
        
        <div className='text-center mb-2'>
          <h3 className='text-2xl font-bold  text-cyan-300 group-hover:text-red-300 transition-colors duration-300'>
            {title}
          </h3>
        </div>
        
        {description && (
          <div className='text-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300'>
            {description}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </div>
  )
}

export default SkillCard