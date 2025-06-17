import aboutData from '../../data.json';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="only-about">
        <h4>{aboutData.about.title}</h4>
      </div>
      
      {aboutData.about.paragraphs.map((paragraph) => (
        <p key={paragraph.id}>
          {paragraph.content}
        </p>
      ))}
    </section>
  );
}

export default About;