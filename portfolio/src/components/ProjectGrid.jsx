import Icon from "./Icon";
import ProjectImage from "./ProjectImage";
import { PROJECTS } from "../data/data";

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {PROJECTS.map((project) => (
        <article key={project.title} className="card project">
          <ProjectImage
            src={project.image}
            alt={`${project.title} website screenshot`}
            title={project.title}
          />

          <div className="project-body">
            <h4>{project.title}</h4>

            <p className="project-subtitle">{project.subtitle}</p>

            {project.text && <p className="project-text">{project.text}</p>}

            {Array.isArray(project.tech) && project.tech.length > 0 && (
              <div className="tags">
                {project.tech.map((tech) => (
                  <span key={`${project.title}-${tech}`} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small"
                >
                  <Icon type="github" size={17} />
                  Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small outline"
                >
                  <Icon type="external" size={17} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}