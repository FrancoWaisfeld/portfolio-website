import uniqid from 'uniqid';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import syncosaurusLogo from '../../assets/syncosaurus_logo.0df96dcc.svg';
import webhookGravityWellImage from '../../assets/webhookGravityWell.png';
import shoppingCartImage from '../../assets/shoppingCart.png';
import RevelerApp from '../../assets/Reveler_app.png';
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
      <section className='section reveler' id='projects'>
        <h1 className='title'>Reveler</h1>
        <div className='projects__reveler'>
          <img src={RevelerApp} alt='Reveler mobile app' className='logo' />
          <p className='description'>
            Reveler is a ticket marketplace for Nightlife venues. I was in
            charge of the product development and gained much of my expertise in
            Next.js, React, and React Native while working here. When I was not
            programming, I was spending time creating our product roadmap and
            talking to customers.
          </p>
          <div className='features_group'>
            <p className='features_title'>Main features:</p>
            <ul className='features'>
              <li>
                - Implemented key features on the web Next.js frontend, enabling
                users to purchase, use, and manage their tickets (Next.js)
              </li>
              <li>
                - Built React Native mobile frontend where users can purchase,
                redeem, and manage their tickets (React Native)
              </li>
              <li>
                - Developed an admin dashboard for venue managers to log in,
                manage ticket offerings, and ensure real-time updates on the
                mobile app (Next.js)
              </li>
            </ul>
          </div>
        </div>
      </section>
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
            target='_blank'
            rel='noreferrer'
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
            project={projects[2]}
            image={shoppingCartImage}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
