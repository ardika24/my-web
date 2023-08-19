import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ProjectProps {
  title: string;
  desc: string;
  tech: string;
  githubLink: string;
  imageSrc: string;
}

const Card: React.FC<ProjectProps> = ({
  title,
  desc,
  tech,
  githubLink,
  imageSrc,
}) => {
  return (
    <div className='flex flex-col items-center bg-white p-4 rounded-md shadow-sm mb-4'>
      <h2 className='text-lg font-semibold mb-2'>{title}</h2>
      <img
        src={imageSrc}
        alt={`Screenshot of ${title}`}
        className='w-full rounded-lg mb-2'
      />
      <p className='text-gray-600 mb-2'>{desc}</p>
      <p className='text-gray-400 mb-2'>{tech}</p>
      <div className='flex'>
        <a href={githubLink} className='text-gray-500 hover:text-gray-800'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Card;
