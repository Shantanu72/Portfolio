import { FiArrowUpRight } from 'react-icons/fi';
import experienceData from '../../data.json';

function Experience() {
  return (
    <section className="experience-section" id='experience'>
      <div className='only-experience'>
        <h4>EXPERIENCE</h4>
      </div>
      
      {experienceData.experiences.map((experience) => (
        <div key={experience.id} className="experience">
          <div className="year">{experience.year}</div>
          <div className="description">
            <h3>
              {experience.company}
              <span className='arrow'>
                <FiArrowUpRight />
              </span>
            </h3>
            <h4>{experience.position}</h4>
            <h4>{experience.role}</h4>
            <p>{experience.description}</p>
            <div className="shot-language">
              {experience.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;