import { BsFillBookmarkStarFill } from 'react-icons/bs';
import projectsData from '../../data.json';

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
              src={project.image} 
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
                src={project.image} 
                alt={project.imageAlt}
              />
            </div>
            
            <div className="shot-language">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

           
            
            <div className="project-buttons">
              {project.playstoreUrl && (
                <a 
                  href={project.playstoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  Playstore
                </a>
              )}
              {project.playUrl && (
                <a 
                  href={project.playUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  Online
                </a>
              )}
               {project.video && (
                <a 
                  href={project.video} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  Video
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
