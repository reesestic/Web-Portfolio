import "../App.css";

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/reesestic" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                Github
            </a>

            <a href="https://www.linkedin.com/in/reese-stichter/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                LinkedIn
            </a>

            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file"></i>
                Resume
            </a>
        </footer>
    )
}