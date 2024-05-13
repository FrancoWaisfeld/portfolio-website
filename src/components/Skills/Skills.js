import uniqid from 'uniqid';
import './Skills.css';

const skills = {
  frontend: [
    'JavaScript',
    'TypeScript',
    'React',
    'jQuery',
    'Handlebars.js',
    'Tailwind',
    'HTML',
    'CSS',
  ],
  backend: [
    'Node.js',
    'Express',
    'Go',
    'Ruby',
    'Sinatra',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'REST APIs',
  ],
  cloud: [
    'AWS (EC2, S3, Lambdas)',
    'Cloudflare (workers, Durable Objects)',
    'Digital Ocean',
    'Heroku',
    'fly.io',
  ],
  other: [
    'Git / Github',
    'bash',
    'HTTP',
    'WebSockets',
    'Jest',
    'Nginx',
    'Postman',
  ],
};

const Skills = () => (
  <section className='section skills' id='skills'>
    <h2 className='section__title'>Skills</h2>
    <div className='skills__types'>
      <h3 className='frontend title'>Frontend</h3>
      <ul className='skills__list frontend_list'>
        {skills.frontend.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h3 className='backend title'>Backend</h3>
      <ul className='skills__list backend_list'>
        {skills.backend.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h3 className='cloud title'>Cloud</h3>
      <ul className='skills__list cloud_list'>
        {skills.cloud.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <h3 className='other title'>Other</h3>
      <ul className='skills__list other_list'>
        {skills.other.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
