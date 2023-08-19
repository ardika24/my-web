import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
interface HomeProps {
  darkMode: boolean;
}

const Home = ({ darkMode }: HomeProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${
        darkMode ? 'dark' : ''
      }`}
    >
      <div className='max-w-md p-6 rounded-lg shadow-xl mb-6 dark:bg-gray-300'>
        <div className='flex flex-col items-center'>
          <img
            className='w-48 h-48 rounded-full mb-4'
            src='/images/PhotoBio.png'
            alt='Foto Profil'
          />
          <p className='text-2xl font-semibold mb-4'>Nur Ardika</p>
          <div className='flex'>
            <a href='https://github.com/ardika24' className='mr-2'>
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
            <a
              href='https://www.linkedin.com/in/nur-ardika-0b54861ab/'
              className='mr-2'
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
            <a href='https://twitter.com/nurardika1' className='mr-2'>
              <FontAwesomeIcon icon={faTwitter} size='2x' />
            </a>
            <a
              href='https://www.instagram.com/nurardika__/?hl=id'
              className='mr-2'
            >
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p
            style={{
              whiteSpace: 'pre-line',
              paddingLeft: '30px',
              textAlign: 'center',
            }}
          >
            🧑‍💻 Fullstack Web Developer
            {'\n'}
            Integrating Expertise: Fusing Programming Proficiency with Nursing
            Knowledge for HealthTech Innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
