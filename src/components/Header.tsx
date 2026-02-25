import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/coursework">Coursework</Link></li>
                    <li><Link to="/aboutme">About Me</Link></li>
                </ul>
            </nav>
        </header>
    )
}