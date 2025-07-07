import aboutData from '../../data.json';

function About() {
    return ( 
        <section className="about-section" id="about">
            <div className="only-about">
                <h4>{aboutData.title}</h4>
            </div>
            {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </section>
     );
}

export default About;