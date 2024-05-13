import uniqid from 'uniqid';
import './ProjectContainer.css';

const ProjectContainer = ({ project, image }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    {image && <img src={image} alt='webhook gravity well' />}

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ProjectContainer;
