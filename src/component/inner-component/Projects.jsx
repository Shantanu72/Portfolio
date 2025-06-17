import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import projectsData from '../../data.json';

// Import images
import blog from '../img/blog.jpg';
import spotify from '../img/spotify.jpg';
import store from '../img/store.jpg';
import weather from '../img/weather.jpg';

// Create image map for dynamic imports
const imageMap = {
  'blog.jpg': blog,
  'spotify.jpg': spotify,
  'store.jpg': store,
  'weather.jpg': weather
};

function Projects() {
  return (
    <section className="project-section" id='project'>
      <div className="only-experience">
        <h4>PROJECTS</h4>
      </div>
      
      {projectsData.projects.map((project) => (
        <div key={project.id} className="experience">
          <div className="project-image">
            <img 
              className="img" 
              src={imageMap[project.image]} 
              alt={project.imageAlt}
            />
          </div>
          
          <div className="description">
            <a href={project.githubUrl}>
              <h3>
                {project.title}
                <span className='arrow'>
                  <HiMiniArrowTrendingUp />
                </span>
              </h3>
            </a>
            
            <h4>{project.type}</h4>
            <p>{project.description}</p>
            
            <div className="shot-language">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            
            <div className="image">
              <img 
                className="img" 
                src={imageMap[project.image]} 
                alt={project.imageAlt}
              />
            </div>
            
            {project.featured && (
              <div className='bookmark-icon'>
                <BsFillBookmarkStarFill />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;