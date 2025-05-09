'use client';
import { TabItem, Tabs } from 'flowbite-react';
import Image from 'next/image';
import ProfileImage from '@/assets/Screenshot_20250509_105405_Gallery (1).jpg';
import React from 'react';

const Page = () => {
  const personalInfo = {
    name: 'Brock Spacek',
    title: 'Full Stack Web Developer',
    email: 'brockspacek1@gmail.com',
    phone: '+1 (209)-505-8044',
    github: 'https://github.com/brockspacek',
    linkedin: 'https://linkedin.com/in/yourusername',
    resumeLink: '/your-resume.pdf',
    about:
      "I'm a passionate web developer with expertise in modern JavaScript frameworks like React and Next.js. With a strong foundation in both frontend and backend technologies, I build responsive, performant web applications that solve real problems. I'm constantly learning new technologies and approaches to stay at the cutting edge of web development.",
  };

  const projects = [
    {
      id: 1,
      title: 'Budget Tracker App',
      description: 'A mobile-friendly app for tracking expenses with local storage support.',
      technologies: ['JavaScript', 'Tailwind CSS', 'Local Storage'],
      link: '#',
    },
    {
      id: 2,
      title: 'Gym Social Media Platform - Spot Me',
      description: 'A web application for connecting gym goers with trainers and spotters.',
      technologies: ['Next.js', 'TypeScript', 'C#'],
      link: 'https://spotme-taupe.vercel.app',
    },
    {
      id: 3,
      title: 'Pokémon Data Explorer',
      description: 'Search and favorite Pokémon with evolution chain info.',
      technologies: ['React', 'PokéAPI', 'Local Storage'],
      link: 'https://pokemon-nine-gules.vercel.app',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'JavaScript/TypeScript', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      category: 'Backend',
      items: ['C#', 'RESTful APIs', 'Authentication & Authorization'],
    },
    {
      category: 'Database',
      items: ['SQL', 'Azure', 'Database Design'],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
        <Image
          src={ProfileImage}
          alt="Profile Image of Brock"
          className="h-[250px] w-[250px] rounded-full border-4 border-emerald-500 shadow-lg mb-4"
        />
        <h1 className="text-5xl font-extrabold text-emerald-400 mb-2">{personalInfo.name}</h1>
        <p className="text-xl text-gray-300">{personalInfo.title}</p>
      </section>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <Tabs aria-label="Portfolio Tabs" variant="default">
          <TabItem active title="🧑‍💻 About Me">
            <div className="p-6 max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold text-emerald-400 mb-4 border-b border-emerald-500 pb-2">
                About Me
              </h2>
              <p className="text-xl text-gray-300">{personalInfo.about}</p>
            </div>
          </TabItem>

          <TabItem title="💼 Projects">
            <div className="grid gap-6 p-6 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border border-emerald-500 rounded-lg p-5 bg-gray-800 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-emerald-400">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                  </p>
                  <a
                    href={project.link}
                    className="text-emerald-400 hover:underline block mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 View Project
                  </a>
                </div>
              ))}
            </div>
          </TabItem>

          <TabItem title="🛠️ Skills">
            <div className="grid gap-6 p-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-emerald-400">{skill.category}</h3>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabItem>

          <TabItem title="📞 Contact">
            <div className="text-center p-6 space-y-4">
              <p className='text-emerald-400'>
                <span className='text-white font-semibold'>Phone:</span> {personalInfo.phone}
              </p>
              <p className='flex justify-center font-semibold'>
                Email:
                <p className="text-emerald-400 underline px-2">
                  {personalInfo.email}
                </p>
                
              </p>
              <div className="flex justify-center gap-8 mt-6">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  🔗 LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </TabItem>

          <TabItem title="📄 Resume">
            <div className="text-center p-6">
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 text-white font-semibold px-6 py-2 rounded hover:bg-emerald-600 transition"
              >
                View My Resume (PDF)
              </a>
            </div>
          </TabItem>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} Brock Spacek. Built with Next.js, Tailwind CSS & Flowbite.
      </footer>
    </div>
  );
};

export default Page;

