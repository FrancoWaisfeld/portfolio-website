import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import './Contact.css';

const contact = {
  email: 'francowaisfeld@gmail.com',
};

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact_links'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            <MailIcon /> {contact.email}
          </span>
        </a>
        <a href='https://www.linkedin.com/in/franco-waisfeld/'>
          <span type='button' className='btn btn--outline'>
            <LinkedInIcon /> LinkedIn
          </span>
        </a>
        <a href='https://github.com/FrancoWaisfeld'>
          <span type='button' className='btn btn--outline'>
            <GitHubIcon /> GitHub
          </span>
        </a>
        <a href='/'>
          <span type='button' className='btn btn--outline'>
            <DescriptionIcon /> Resume NEED TO ADD LINK
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
