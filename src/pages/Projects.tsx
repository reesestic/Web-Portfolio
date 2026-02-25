import "../Projects.css";
import ProjectRow from "../components/ProjectRow.tsx";
import type { Project } from "../../types/Project";

const projects : Project[] = [
    {
        title: "ClockIn: Task Scheduler & Study Tool",
        description: "Full-stack study tool that converts user " +
            "input into structured daily study plans. Designed with persistent " +
            "user data and Google Calendar API integration. ",

        tech: ["React", "FastAPI", "Supabase", "Vercel", "Railway"],
        image: "/clockin.png",
        alt: "ClockIn",
        highlights: [
            "Designed FastAPI backend controller between React and user data",
            "Built relational schema using Supabase",
            "Created AI-driven task creation and atomization"
        ],
    },
    {
        title: "BU Daily Crossword Website",
        description: "Fullstack website providing daily crosswords" +
            "to BU students. Handles Routing, Student Authentication and Admin backend editing",
        tech: ["Django", "HTML/CSS", "JavaScript", "PythonAnywhere"],
        image: "/crossword-website.png",
        alt: "DFP Crossword Website",
        highlights: [
            "Integrated into existing large Django codebase",
            "Extended URL routing and view logic within MVC architecture",
            "Deployed Bug Report form with proper Django logic"
        ]
    },
    {
        title: "Responsive Personal Website",
        description: "Personal website written with responsive CSS" +
            "conventions, media queries and multi-page React routed framework",
        tech: ["React", "TypeScript", "CSS", "Vercel"],
        image: "/personal-website.png",
        alt: "Website Photo",
        highlights: [
            "Created multi-page React routing website",
            "Maintained responsiveness using best-practice conventions",
            "Managed React folders, media queries and Vercel deployment"
        ],
    },
    {
        title: "Bunion Newspaper Website",
        description: "Manage Squarespace website for" +
            "Bunion club and authenticate website used by" +
            "300+ students monthly",
        tech: ["Squarespace", "CSS"],
        image: "/bunion.png",
        alt: "Bunion Website",
        highlights: [
            "Managed and updated site content through Squarespace CMS",
            "Coordinated with contributors to publish and format articles",
            "Customized layout and styling to maintain brand consistency"
        ],
    },
];

export default function Projects() {
    return (
        <section className="projects-page">
            <h1 className="projects-header">Developed Projects</h1>

            {/*Need to make this 1fr 1fr grid*/}
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectRow key={project.title} project={project} />
                ))}

            </div>
        </section>
    )
}