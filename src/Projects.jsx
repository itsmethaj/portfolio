function ProjectCard({ title, category, paragraph }) {
  return (
    <div className="rectangle">
      <h2>
        <span className="title">{title}</span>
        <br />
        <span className="category">{category}</span>
      </h2>
      <p>{paragraph}</p>
    </div>
  );
}

function Projects() {
  const rectangleData = [
    {
      title: "Glassy Tube",
      category: "YouTube UI Clone",
      paragraph:
        "A YouTube UI clone that went from static HTML to live API data. dark, glassy, and actually works.",
    },
    {
      title: "Hospital Management System",
      category: "CLI App",
      paragraph:
        "Built this in C to actually understand data structures, not just read about them.",
    },
    {
      title: "Gym Membership System",
      category: "Database Project",
      paragraph:
        "Designed a full database from scratch . 7 tables, real relationships, the whole thing.",
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
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
