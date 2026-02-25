import "../AboutMe.css";

export default function AboutMe() {
    return (
        <div className="aboutme-page">

            <div className="info-section">
                <h1>Reese Stichter</h1>
                <h2>Computer Science @ Boston University</h2>
            </div>

            {/* Skills - outside the col layout */}
            <div className="skills-wrapper">
                <div className="skill-row">
                    <div className="skill-label">Languages</div>
                    <div className="skill-group">
                        <span className="skill-button">Java</span>
                        <span className="skill-button">C/C++</span>
                        <span className="skill-button">Python</span>
                        <span className="skill-button">SQL</span>
                        <span className="skill-button">HTML/CSS</span>
                        <span className="skill-button">JS/TS</span>
                    </div>
                </div>

                <div className="skill-row">
                    <div className="skill-label">Tools</div>
                    <div className="skill-group">
                        <span className="skill-button">Git/GitHub</span>
                        <span className="skill-button">Linux</span>
                        <span className="skill-button">GDB</span>
                        <span className="skill-button">Vercel</span>
                        <span className="skill-button">Railway</span>
                        <span className="skill-button">Supabase</span>
                    </div>
                </div>

                <div className="skill-row">
                    <div className="skill-label">Frameworks</div>
                    <div className="skill-group">
                        <span className="skill-button">React</span>
                        <span className="skill-button">Node.js</span>
                        <span className="skill-button">PyTorch</span>
                    </div>
                </div>
            </div>

            {/* 1/2 col layout - image + cards */}
            <div className="about-container">

                <div className="left-col">
                    <img src="/headshot.jpg" alt="Reese Stichter" className="profile-pic" />
                    <div className="gpa-box">GPA: 3.71</div>
                </div>

                <div className="right-col">
                    <div className="top-cards">
                        <div className="card">
                            <h3>Information</h3>
                            <p>📍 Tampa, FL & Boston, MA</p>
                            <p>📚 Minor in Data Science</p>
                            <p>📧 reese.stichter@gmail.com</p>
                        </div>
                        <div className="card">
                            <h3>Tech Passions</h3>
                            <p>⚙️ Software Engineering</p>
                            <p>🌐 Fullstack Development</p>
                            <p>🎮 Game Development</p>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Personal Statement</h3>
                        <p>My name is Reese Stichter, and I am a Junior studying Computer Science at Boston University. I've loved computers since I built one from scratch in high school.</p>
                        <p>I love to develop impactful, full-stack technology with innovative design and effective UI.</p>
                        <p>I hope to build technology that positively impacts people's lives during my career.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}