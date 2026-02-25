import type { Project } from "../../types/Project";
import "../Projects.css";

export default function ProjectRow({ project }: { project: Project }) {
    return (
        <section className="project-card">
            <h2 className="project-title">{project.title}</h2>

            <div className="project-layout">

                <div className="left-side">

                    <img className="project-img" src={project.image} alt={project.alt} />
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <i className={project.linkIcon}></i>
                        {project.linkText}
                    </a>
                </div>

                <div className="project-content">

                    <div className="project-section">
                        <span className="section-label">Description</span>
                        <p>{project.description}</p>
                    </div>

                    <div className="project-section">
                        <span className="section-label">Tech Stack</span>
                        <div className="tech-list">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="project-section">
                        <span className="section-label">Development Highlights</span>
                        <ul>
                            {project.highlights.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}