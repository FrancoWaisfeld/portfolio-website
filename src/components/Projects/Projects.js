import uniqid from 'uniqid';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import syncosaurusLogo from '../../assets/syncosaurus_logo.0df96dcc.svg';
import webhookGravityWellImage from '../../assets/webhookGravityWell.png';
import shoppingCartImage from '../../assets/shoppingCart.png';
import todoListImage from '../../assets/TodoList.png';
import './Projects.css';

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Webhook Gravity Well',
    description: 'A utility for receiving, testing, and debugging webhooks',
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Digital Ocean Droplet',
      'Nginx',
    ],
    imagePath: '../../assets/webhookGravityWell.png',
  },
  {
    name: 'Todo List',
    description: 'Application for managing todo lists',
    stack: ['Ruby', 'Sinatra', 'ERB', 'PostgreSQL'],
  },
  {
    name: 'smartCart',
    description: 'Database backed eCommerce shopping cart',
    stack: ['React', 'Express', 'Node.js', 'MongoDB'],
  },
];

const Projects = () => {
  if (!projects.length) return null;

  return (
    <>
      <section className='section syncosaurus' id='projects'>
        <h1 className='title'>Syncosaurus</h1>
        <div className='projects__syncosaurus'>
          <img src={syncosaurusLogo} alt='syncosaurus' className='logo' />
          <p className='description'>
            An open-source React-Javascript framework for building collaborative
            real-time applications. Syncosaurus abstracts away the complexities
            of state synchronization, conflict resolution, and scaling
            websockets so developers can focus on shipping features.
          </p>
          <p className='features_title'>Main features:</p>
          <ul className='features'>
            <li>
              - Synchronization engine with client-side predition and server
              reconciliation
            </li>
            <li>- Command line tool for development and deployment</li>
            <li>- Built in analytics dashboard for monitoring and debugging</li>
          </ul>
          <a
            href='https://syncosaurus.github.io/case-study'
            className='case_study'
          >
            <button type='button' role='link' className='btn btn--outline'>
              Read Syncosaurus case study 🔗
            </button>
          </a>
        </div>
      </section>
      <section className='section projects'>
        <h2 className='section__title'>Other Projects</h2>

        <div className='projects__grid'>
          <ProjectContainer
            key={uniqid()}
            project={projects[0]}
            image={webhookGravityWellImage}
          />
          <ProjectContainer
            key={uniqid()}
            project={projects[1]}
            image={todoListImage}
          />
          <ProjectContainer
            key={uniqid()}
            project={projects[2]}
            image={shoppingCartImage}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
