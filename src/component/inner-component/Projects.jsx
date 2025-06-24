import { BsFillBookmarkStarFill } from 'react-icons/bs';
import projectsData from '../../data.json';

// Import images
import blog from '../img/blog.jpg';
import spotify from '../img/spotify.jpg';
import store from '../img/store.jpg';
import weather from '../img/weather.jpg';

// Image map
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
              </h3>
            </a>

            <h4>{project.type}</h4>
            <p>{project.description}</p>

             <div className="image">
              <img 
                className="img" 
                src={imageMap[project.image]} 
                alt={project.imageAlt}
              />
            </div>
            
            <div className="shot-language">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

           
            
             {/* New buttons */}
            <div className="project-buttons">
              {project.playstoreUrl && (
                <a 
                  href={project.playstoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn playstore-btn glass"
                >
                  Playstore
                </a>
              )}
              {project.playUrl && (
                <a 
                  href={project.playUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn playonline-btn"
                >
                  Play Online
                </a>
              )}
               {project.video && (
                <a 
                  href={project.video} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn playonline-btn"
                >
                  Watch Video
                </a>
              )}
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
