import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import headshot from '../../assets/headshot.png';
import resume from '../../assets/FrancoResume2024.pdf';
import './About.css';

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Franco',
  role: 'Full Stack Software Engineer based in San Diego, CA',
  social: {
    linkedin: 'https://www.linkedin.com/in/franco-waisfeld/',
    github: 'https://github.com/FrancoWaisfeld',
  },
};

const About = () => {
  const { name, role, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I&#39;m <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && (
        <h2 className='about__role'>
          A Full Stack Software Engineer
          <br />
          based in San Diego, CA
        </h2>
      )}
      <p className='about__desc'>
        Through my background in marketing and product management I have a deep
        understanding of the desires of customers and business implications of
        engineering decisions.
        <br />
        <br />I have experience with JavaScript, Node.js, React, TypeScript,
        Ruby, Go, PostgreSQL, MongoDB, AWS, CloudFlare, and Git / Github.
        <br />
        <br />
        Recently, I built{' '}
        <a
          href='https://syncosaurus.github.io/case-study'
          target='_blank'
          rel='noreferrer'
        >
          🦖Syncosaurus
        </a>
        , an open-source framwork for real-time collaborative web applications.
      </p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <button type='button' className='btn btn--outline'>
              Resume
            </button>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      <img className='about__headshot' src={headshot} alt='franco waisfeld' />
    </div>
  );
};

export default About;
