import Card from './Card/Card';

const projects = [
  {
    title: 'Final Projects Bootcamp',
    desc: 'Developed a collection of web games using Next.js, ExpressJS, PostgreSQL, and Sequelize. Showcase of various game mechanics and interactive experiences.',
    tech: 'NextJs, ExpressJS, PostgreSQL, Sequelize',
    imageSrc: '/images/finalProjects.png',
    githubLink: 'https://github.com/ardika24/web-games-frontend',
  },
  {
    title: 'Medical Record App',
    desc: 'Crafted a sophisticated Medical Record Management App using Next.js and Prisma. Empowers healthcare professionals to manage patient data, medical records, and pharmacy stock efficiently.',
    tech: 'NextJs, Prisma, PostgreSQL',
    imageSrc: '/images/medicalRecord.png',
    githubLink: 'https://github.com/ardika24?tab=repositories',
  },
];

const Project = () => {
  return (
    <>
      <div className={`min-h-screen flex items-center justify-center`}>
        <div className='max-w-lg p-8 rounded-lg shadow-xl dark:bg-gray-300'>
          <div className='mt-8 flex flex-wrap'>
            <h2 className='w-full text-2xl font-semibold mb-4 text-center'>
              My Projects
            </h2>
            {projects.map((project, index) => (
              <div key={index} className='w-1/2 pr-4 mb-4'>
                <Card {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
