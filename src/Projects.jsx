function ProjectCard({ title, category, paragraph , link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="rectangle-link">
      <div className="rectangle">
        <h2>
          <span className="title">{title}</span>
          <br />
          <span className="category">{category}</span>
        </h2>
        <p>{paragraph}</p>
      </div>
    </a>
  );
}

function Projects() {
  const rectangleData = [
    {
      title: "Glassy Tube",
      category: "YouTube UI Clone",
      paragraph:
        "A YouTube UI clone that went from static HTML to live API data. dark, glassy, and actually works.",
      link: "https://itsmethaj.github.io/glassy-tube/",
    },
    {
      title: "Hospital Management System",
      category: "CLI App",
      paragraph:
        "Built this in C to actually understand data structures, not just read about them.",
      link: "https://drive.google.com/file/d/103iFRL1LKLy7hxfRZrvajhxV3IBMkH0S/view?usp=drive_link",
    },
    {
      title: "Gym Membership System",
      category: "Database Project",
      paragraph:
        "Designed a full database from scratch . 7 tables, real relationships, the whole thing.",

      link: "https://drive.google.com/file/d/1pW7xIoTICTCj0ZfJt-rcK1XjAqawtC9r/view?usp=drive_link",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <div className="rectangle-container">
        {rectangleData.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            category={item.category}
            paragraph={item.paragraph}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
