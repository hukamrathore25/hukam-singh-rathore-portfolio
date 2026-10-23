import React, { useState } from "react";

const skills = [
  { title: "Frontend", icon: "</>", items: ["HTML5", "CSS3", "JavaScript", "React"] },
  { title: "Backend", icon: "{ }", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", icon: "▤", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "Tools", icon: "⚙", items: ["Git", "GitHub", "VS Code", "Vite"] }
];

const projects = [
  {
    no: "01",
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website showcasing my profile, skills, education, and projects.",
    tech: ["React", "CSS", "JavaScript"],
    url: "https://github.com/"
  },
  {
    no: "02",
    title: "Task Manager",
    description: "A simple task-management project concept for organizing tasks and tracking progress.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/"
  },
  {
    no: "03",
    title: "Full-Stack Practice App",
    description: "A learning project exploring frontend interfaces, backend APIs, and database connectivity.",
    tech: ["Node.js", "Express", "MongoDB"],
    url: "https://github.com/"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}><span className="logo-box">H</span> hukam<span className="dot">.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-content">
            <div className="availability"><span></span> Open to internship opportunities</div>
            <p className="kicker">HELLO, I'M</p>
            <h1>Hukam Singh<br />Rathore<span className="accent">.</span></h1>
            <h2>Full Stack Software Engineering Student</h2>
            <p className="intro">I’m a software engineering student who enjoys building useful, responsive web experiences. I’m learning to connect frontend interfaces with backend services and databases while growing through hands-on projects.</p>
            <div className="buttons">
              <a className="btn primary" href="#projects">Explore my work <span>↗</span></a>
              <a className="btn secondary" href="#contact">Let's connect <span>✉</span></a>
            </div>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer">⌘ GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in LinkedIn</a>
              <span>⌖ India</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="ring ring-one"></div><div className="ring ring-two"></div>
            <div className="code-card">
              <div className="window-bar"><i></i><i></i><i></i><span>developer.js</span></div>
              <div className="code">
                <p><b className="purple">const</b> developer = {"{"}</p>
                <p className="indent"><b className="blue">name</b>: <b className="green">"Hukum Singh Rathore"</b>,</p>
                <p className="indent"><b className="blue">role</b>: <b className="green">"Full Stack Student"</b>,</p>
                <p className="indent"><b className="blue">CGPA</b>: <b className="orange">8.5</b>,</p>
                <p className="indent"><b className="blue">mindset</b>: <b className="green">"Always learning"</b></p>
                <p>{"}"};</p>
                <p className="comment">// learn • build • improve</p>
              </div>
              <div className="floating float-left">✦ <span>Curious mind<br /><b>Creative builder</b></span></div>
              <div className="floating float-right">⌘ <span>Full Stack<br /><b>Development</b></span></div>
            </div>
            <p className="art-caption">Turning ideas into digital experiences</p>
          </div>
          <a className="scroll" href="#about">↓ &nbsp; Scroll to explore</a>
        </section>

        <section className="wrap section" id="about">
          <div className="section-heading"><p className="kicker">A LITTLE ABOUT ME</p><h2>Curious by nature. <span>Builder by choice.</span></h2><p>I’m focused on learning through hands-on projects, teamwork, and practical problem-solving.</p></div>
          <div className="about-grid">
            <div className="about-card">
              <div className="feature-icon">✦</div>
              <h3>Building my foundation, one project at a time.</h3>
              <p>I’m interested in creating websites and applications that are clean, responsive, and easy to use. I enjoy exploring new technologies, understanding how different parts of an application work together, and improving my skills by building projects.</p>
              <p>My current focus is on frontend development with React, backend APIs with Node.js and Express, and working with databases.</p>
            </div>
            <div className="stats">
              <div className="stat"><b>8.5</b><div><strong>CGPA</strong><p>Academic performance</p></div></div>
              <div className="stat"><b>01</b><div><strong>Learn every day</strong><p>Build skills with consistency</p></div></div>
              <div className="stat"><b>02</b><div><strong>Build projects</strong><p>Turn concepts into practice</p></div></div>
            </div>
          </div>
        </section>

        <section className="wrap section" id="skills">
          <div className="section-heading"><p className="kicker">WHAT I WORK WITH</p><h2>Skills & technologies</h2><p>Technologies I’m learning and using to build web projects.</p></div>
          <div className="skills-grid">
            {skills.map((skill) => <article className="skill-card" key={skill.title}>
              <div className="skill-top"><span className="skill-icon">{skill.icon}</span><span className="skill-number">0{skills.indexOf(skill) + 1}</span></div>
              <h3>{skill.title}</h3>
              <div className="tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="wrap section" id="projects">
          <div className="section-heading project-heading"><div><p className="kicker">SELECTED WORK</p><h2>Projects & practice</h2><p>Sample cards to help present your work. Replace them with your actual projects before submitting.</p></div><a className="text-link" href="https://github.com/" target="_blank" rel="noreferrer">GitHub profile ↗</a></div>
          <div className="projects-grid">
            {projects.map((project) => <article className="project-card" key={project.no}>
              <div className="project-top"><span>{project.no}</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={"Open " + project.title}>↗</a></div>
              <div className="project-visual"><div className="mini-browser"><div className="mini-dots">● ● ●</div><div className="mini-line"></div><div className="mini-line short"></div><div className="mini-button"></div></div></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="repo-link" href={project.url} target="_blank" rel="noreferrer">View repository ↗</a>
            </article>)}
          </div>
        </section>

        <section className="wrap section" id="education">
          <div className="section-heading"><p className="kicker">MY JOURNEY</p><h2>Education & experience</h2><p>My academic journey and practical learning experience.</p></div>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-symbol">▣</span><div><small>CURRENT</small><h3>B.Tech — Software Engineering</h3><h4>Vivekananda Global University, Jaipur</h4><p>Learning programming, software development, data structures, and computer science fundamentals.</p><span className="cgpa-pill">CGPA: 8.5</span></div></div>
            <div className="timeline-item"><span className="timeline-symbol">⌘</span><div><small>INTERNSHIP EXPERIENCE</small><h3>Full-Stack Development Intern</h3><h4>Thiranex EduTech LLP · Jun – Jul 2026</h4><p>Worked on learning tasks involving HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Update this description to match the tasks you completed.</p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="wrap contact-grid">
          <div><p className="kicker">HAVE A PROJECT IN MIND?</p><h2>Let’s build something<br /><span>meaningful.</span></h2><p className="contact-intro">I’m open to learning opportunities, collaboration, and internships. Feel free to connect.</p></div>
          <div className="contact-card"><small>GET IN TOUCH</small><a className="email-link" href="mailto:your.email@example.com">✉ &nbsp; your.email@example.com <span>↗</span></a><hr /><a href="https://github.com/" target="_blank" rel="noreferrer">⌘ &nbsp; GitHub <span>↗</span></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in &nbsp; LinkedIn <span>↗</span></a><p>Update the email, GitHub, and LinkedIn links with your own details.</p></div>
        </div></section>
      </main>
      <footer className="wrap footer"><a className="logo" href="#home"><span className="logo-box">H</span> hukum<span className="dot">.</span></a><p>Designed and built with React.</p><a href="#home">Back to top ↑</a><small>© {new Date().getFullYear()} Hukum Singh Rathore</small></footer>
    </div>
  );
}

export default App;