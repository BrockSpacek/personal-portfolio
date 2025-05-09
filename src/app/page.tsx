
import { TabItem, Tabs } from 'flowbite-react';
import Image from 'next/image';
import ProfileImage from "@/assets/Screenshot_20250509_105405_Gallery (1).jpg"

import React from 'react'

const page = () => {

  const personalInfo = {
    name: "Brock Spacek",
    title: "Full Stack Web Developer",
    email: "brockspacek1@gmail.com",
    phone: "+1 (209)-505-8044",
    github: "https://github.com/brockspacek",
    linkedin: "https://linkedin.com/in/yourusername",
    resumeLink: "/your-resume.pdf",
    about: "I'm a passionate web developer with expertise in modern JavaScript frameworks like React and Next.js. With a strong foundation in both frontend and backend technologies, I build responsive, performant web applications that solve real problems. I'm constantly learning new technologies and approaches to stay at the cutting edge of web development."
  };

  // const projects = [
  //   {
  //     id: 1,
  //     title: "",
  //     description: "",
  //     technologies: [],
  //     image: "",
  //     link: "#"
  //   },
  //   {
  //     id: 2,
  //     title: "",
  //     description: "",
  //     technologies: [],
  //     image: "",
  //     link: "#"
  //   },
  //   {
  //     id: 3,
  //     title: "",
  //     description: "",
  //     technologies: [],
  //     image: "",
  //     link: "#"
  //   }
  
  // ];

  // const skills = [
  //   {
  //     category: "Frontend",
  //     items: ["React", "Next.js", "JavaScript/TypeScript", "Tailwind CSS", "Responsive Design"]
  //   },
  //   {
  //     category: "Backend",
  //     items: [ "C#", "RESTful APIs", "Authentication & Authorization"]
  //   },
  //   {
  //     category: "Database",
  //     items: ["SQL", "Azure", "Database Design"]
  //   },
    
  // ];



  return (
    <div className='bg-gray-700 min-h-screen'>
      <div>
        <Image src={ProfileImage} alt='Profile Image of Brock' className='h-[250px] w-[250px] rounded-full mx-auto p-3 border-r-emerald-400'/>
      </div>
      <div className='text-4xl font-bold text-center'>{personalInfo.name}</div>
      <Tabs aria-label="Default tabs" variant="default">
      <TabItem active title="Profile">
        <span className="font-medium text-gray-800 dark:text-white">Profile Tab</span>.
        
      </TabItem>
      <TabItem title="Projects" >
        This is <span className="font-medium text-gray-800 dark:text-white"></span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </TabItem>
      <TabItem title="Skills">
        This is <span className="font-medium text-gray-800 dark:text-white"></span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </TabItem>
      <TabItem title="Contact Info" >
        This is <span className="font-medium text-gray-800 dark:text-white"></span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </TabItem>
      <TabItem title="Resume">
        This is <span className="font-medium text-gray-800 dark:text-white"></span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </TabItem>
      
    </Tabs>
    </div>
  )
}

export default page