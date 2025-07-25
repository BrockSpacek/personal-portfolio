import SkillCard from '@/Components/SkillCard'
import ReactLogo from "@/assets/icons8-react-js-200.png"
import NextLogo from "@/assets/NextLogo.png"
import SQLLogo from "@/assets/sql-server.png"
import TailWindLogo from "@/assets/icons8-tailwind-css-240.png"
import FigmaLogo from "@/assets/icons8-figma-200.png"
import TypeScriptLogo from "@/assets/icons8-typescript-96.png"
import JavaScriptLogo from "@/assets/icons8-javascript-96.png"
import HTMLLogo from "@/assets/icons8-html-96.png"

// Skills 
const skillsData = [
  {
    id: 1,
    title: "React",
    logo: ReactLogo,
    description: "Frontend Library",
  },
  {
    id: 2,
    title: "Next.js",
    logo: NextLogo,
    description: "React Framework"
  },
  {
    id: 3,
    title: "SQL Server",
    logo: SQLLogo,
    description: "Database Management System"
  },
  {
    id: 4, 
    title: "Tailwind CSS",
    logo: TailWindLogo,
    description: "CSS framework"
  },
  {
    id: 5, 
    title: "Figma", 
    logo: FigmaLogo,
    description: "UI/UX Design Tool"
  },
  {
    id: 6,
    title: "TypeScript",
    logo: TypeScriptLogo,
    description: "Programming Language"
  },
  {
    id: 7,
    title: "JavaScript",
    logo: JavaScriptLogo,
    description: "Programming Language"
  },
  {
    id: 8,
    title: "HTML",
    logo: HTMLLogo,
    description: "Markup Language"
  }

]
  

const SkillsPage = () => {
  return (
    <div className='min-h-screen bg-gray-900'>
      
      <div className='text-center pt-16 pb-12'>
        <h1 className='text-6xl md:text-7xl font-bold text-cyan-400  mb-4'>
          Skills
        </h1>
        <p className='text-gray-400 text-lg max-w-2xl mx-auto px-4'>
          Technologies and tools I use to bring my ideas to life
        </p>
      </div>
      
      {/* Skill Cards */}
      <div className='container mx-auto px-6 pb-16'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8'>
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              logo={skill.logo}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
      
     
      
    </div>
  )
}

export default SkillsPage