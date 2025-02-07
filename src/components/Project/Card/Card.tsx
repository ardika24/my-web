import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Card.module.scss';

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
    <div className={styles.card}>
      <img
        src={imageSrc}
        alt={`Screenshot of ${title}`}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{desc}</p>
        <p className='text-gray-400 mb-2'>{tech}</p>
        <a href={githubLink} className={styles.cardButton}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
