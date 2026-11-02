import { useEffect, useState } from "react";
import "./style.css";

const projects = [
  {
    id: 1,
    category: "AI & Development",
    title: "AI Server Monitoring Platform",
    description:
      "A centralized monitoring platform that collects Windows and Linux server metrics, processes system events, and displays infrastructure health through an interactive dashboard.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "Recharts", "psutil"],
    image: "/images/ai-server-monitoring-architecture.png",
    github: "https://github.com/gnagapavansai",
  },
  {
    id: 2,
    category: "Machine Learning",
    title: "Liver Disease Prediction",
    description:
      "A machine learning project that explores classification algorithms for liver disease prediction and compares model performance using evaluation metrics.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    github: "https://github.com/gnagapavansai",
  },
  {
    id: 3,
    category: "Data Analytics",
    title: "Accident Hotspot Analysis",
    description:
      "A Power BI analytics project exploring accident patterns and identifying high-risk locations through interactive data visualizations.",
    technologies: ["Power BI", "Data Analytics", "Data Visualization"],
    github: "https://github.com/gnagapavansai",
  },
  {
    id: 4,
    category: "Data Analytics",
    title: "Cultivating Growth in India",
    description:
      "An exploratory data analysis project focused on agricultural data, identifying trends and presenting insights through data analysis.",
    technologies: ["Python", "EDA", "Pandas", "Data Visualization"],
    github: "https://github.com/gnagapavansai",
  },
];

const skillGroups = [
  {
    title: "Development & Engineering",
    icon: "⌘",
    skills: ["Python", "JavaScript", "FastAPI", "REST APIs", "HTML5", "CSS3"],
  },
  {
    title: "Generative AI & Machine Learning",
    icon: "✳",
    skills: [
      "Generative AI",
      "Amazon Bedrock",
      "Amazon Nova Lite",
      "Machine Learning",
      "Scikit-learn",
      "Logistic Regression",
      "SVM",
      "Random Forest",
      "Decision Tree",
      "KNN",
    ],
  },
  {
    title: "Data & Analytics",
    icon: "▥",
    skills: [
      "PostgreSQL",
      "SQL",
      "Power BI",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Model Evaluation",
    ],
  },
  {
    title: "Infrastructure & Tools",
    icon: "⌘",
    skills: [
      "Networking",
      "Routers",
      "Switches",
      "Firewalls",
      "Windows Server",
      "Linux Fundamentals",
      "Git & GitHub",
      "ChatGPT",
      "GitHub Copilot",
      "Claude",
    ],
  },
];

const education = [
  {
    qualification: "Master of Computer Applications (MCA)",
    institution: "D.N.R. (A) College",
    period: "2024 – 2026",
  },
  {
    qualification: "Bachelor's Degree",
    institution: "B.V. Raju College",
    period: "2021 – 2024",
  },
];

const filters = [
  "All",
  "AI & Development",
  "Machine Learning",
  "Data Analytics",
];

const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navigation.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 180) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span className="logo-mark">P</span>
          <span>PAVAN<span className="logo-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Connect <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              SOFTWARE & AI ENTHUSIAST
            </div>

            <p className="hero-eyebrow">HELLO, I'M</p>

            <h1>
              Naga Pavan
              <br />
              <span>Sai Gudla.</span>
            </h1>

            <h2 className="hero-role">
              Web Application Developer
              <span className="role-divider">·</span>
              <span className="role-company">TCS</span>
            </h2>

            <div className="hero-accent-line" />

            <p className="hero-description">
              Building reliable web applications, practical automation, and
              intelligent technology solutions. Passionate about applying
              Generative AI and AI technologies to create useful software
              experiences.
            </p>

            <div className="hero-interest">
              <span className="focus-label">FOCUS AREAS</span>

              <div className="interest-tags">
                <span><b>Py</b> Python Automation</span>
                <span><b>✳</b> Generative AI</span>
                <span><b>▰</b> AI-powered Applications</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                Explore My Work <span>↗</span>
              </a>
              <a href="#contact" className="button-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/gnagapavansai"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/naga-pavan-sai-gudla-65ba60237/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-side-ornament hero-side-ornament-left" aria-hidden="true">
            <span className="side-ornament-label">SYS / 01</span>
            <span className="side-ornament-track">
              <i />
              <i />
              <i />
            </span>
            <span className="side-ornament-label">AI · WEB</span>
          </div>
          <div className="hero-side-ornament hero-side-ornament-right" aria-hidden="true">
            <span className="side-ornament-label">BUILD / 02</span>
            <span className="side-ornament-track">
              <i />
              <i />
              <i />
            </span>
            <span className="side-ornament-label">DATA · CODE</span>
          </div>

          {/* PROFILE VISUAL */}
          <div className="hero-visual">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-halo" />

            <div className="portrait-frame">
              <div className="portrait-light-background" />
              <img
                src="/images/profile.png"
                alt="Naga Pavan Sai Gudla"
                className="profile-image"
              />
            </div>

            <div className="float-card float-python">
              <span className="float-icon python-icon">Py</span>
              <span className="float-copy">
                <strong>PYTHON</strong>
                <small>Automation</small>
              </span>
            </div>

            <div className="float-card float-ai">
              <span className="float-icon ai-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
                </svg>
              </span>
              <span className="float-copy">
                <strong>GENERATIVE AI</strong>
                <small>AI-powered solutions</small>
              </span>
            </div>

            <div className="float-card float-ml">
              <span className="float-icon ml-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 5h19l-5 14H0L5 5Z" />
                </svg>
              </span>
              <span className="float-copy">
                <strong>AI APPLICATIONS</strong>
                <small>Intelligent solutions</small>
              </span>
            </div>

            <div className="portrait-caption">
              <span className="caption-dot" />
              WEB APPLICATION DEVELOPER
              <b>· TCS</b>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY TICKER */}
        <div className="ticker">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                {[
                  "WEB DEVELOPMENT",
                  "PYTHON",
                  "GENERATIVE AI",
                  "MACHINE LEARNING",
                  "FASTAPI",
                  "AMAZON BEDROCK",
                  "POSTGRESQL",
                  "POWER BI",
                ].map((item) => (
                  <span key={`${item}-${copy}`}>
                    <i>✳</i> {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="section section-container" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 / ABOUT ME</span>
            <h2>
              Turning ideas into
              <span> practical solutions.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                I'm a Web Application Developer interested in building
                software solutions that combine application development,
                automation, and AI technologies.
              </p>

              <p>
                My experience includes Python-based automation, enterprise
                applications, network infrastructure, and application
                security assessments. I enjoy understanding technical
                challenges and translating them into practical solutions.
              </p>

              <p>
                I'm particularly interested in Generative AI and AI-powered
                applications, and how intelligent technologies can improve
                everyday software systems.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <strong>2+</strong>
                <span>Years of professional experience</span>
              </div>
              <div className="stat-card">
                <strong>4+</strong>
                <span>Technical and analytics projects</span>
              </div>
              <div className="stat-card">
                <strong>AI</strong>
                <span>Technology and learning focus</span>
              </div>
              <div className="stat-card">
                <strong>MCA</strong>
                <span>Postgraduate education</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section section-container" id="experience">
          <div className="section-heading">
            <span className="section-kicker">02 / EXPERIENCE</span>
            <h2>
              My professional
              <span> journey.</span>
            </h2>
          </div>

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <span className="experience-period">MAR 2025 – PRESENT</span>
                <h3>Web Application Developer</h3>
                <p className="company-name">
                  Tata Consultancy Services (TCS)
                </p>
              </div>
              <span className="experience-status">FULL-TIME</span>
            </div>

            <div className="experience-description">
              <ul>
                <li>
                  Developed Python automation scripts and workflows to
                  streamline technical processes and improve operational
                  efficiency.
                </li>
                <li>
                  Worked with AI tools and Generative AI concepts to explore
                  automation and intelligent application solutions.
                </li>
                <li>
                  Performed application vulnerability assessments and security
                  evaluations, identifying gaps and recommending remediation.
                </li>
                <li>
                  Supported enterprise applications running on network
                  infrastructure, including routers, switches, and firewalls.
                </li>
                <li>
                  Collaborated with cross-functional teams to understand
                  technical requirements and deliver practical solutions.
                </li>
              </ul>
            </div>

            <div className="experience-tags">
              {[
                "Python",
                "Automation",
                "Generative AI",
                "Application Security",
                "Networking",
              ].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section section-container" id="projects">
          <div className="section-heading">
            <span className="section-kicker">03 / PROJECTS</span>
            <h2>
              Things I've
              <span> worked on.</span>
            </h2>
            <p>
              A selection of development, machine learning, and data analytics
              projects.
            </p>
          </div>

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter-active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-placeholder">
                      <span>✳</span>
                      <small>{project.category}</small>
                    </div>
                  )}
                  <span className="project-number">0{project.id}</span>
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button
                      className="project-details-button"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details <span>↗</span>
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section section-container" id="skills">
          <div className="section-heading">
            <span className="section-kicker">04 / SKILLS</span>
            <h2>
              Technologies &
              <span> expertise.</span>
            </h2>
            <p>
              Tools and technologies across development, automation, AI,
              analytics, and infrastructure.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <span>{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section section-container" id="education">
          <div className="section-heading">
            <span className="section-kicker">05 / EDUCATION</span>
            <h2>
              Academic
              <span> background.</span>
            </h2>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <div className="education-card" key={item.qualification}>
                <span className="education-icon">▤</span>
                <span className="education-period">{item.period}</span>
                <h3>{item.qualification}</h3>
                <p>{item.institution}</p>
              </div>
            ))}
          </div>

          <div className="badges-heading">
            <h3>Learning & Achievements</h3>
            <p>Selected learning achievements in cloud and AI technologies.</p>
          </div>

          <div className="badge-grid">
            <div className="achievement-card">
              <span className="achievement-icon">✦</span>
              <div>
                <h4>AWS Cloud Quest: Generative AI Practitioner</h4>
                <p>AWS learning achievement</p>
              </div>
            </div>

            <div className="achievement-card">
              <span className="achievement-icon">✧</span>
              <div>
                <h4>AWS Agentic AI Demonstrated</h4>
                <p>AWS learning achievement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-container contact-section" id="contact">
          <div className="contact-card">
            <span className="section-kicker">06 / CONTACT</span>
            <h2>
              Have a project or
              <br />
              opportunity in mind?
            </h2>
            <p>
              I'm interested in connecting with people working on web
              applications, automation, Generative AI, and intelligent
              technology solutions.
            </p>

            <a
              href="mailto:gnagapavansai@gmail.com"
              className="button-primary"
            >
              Get in Touch <span>↗</span>
            </a>

            <div className="contact-links">
              <a href="mailto:gnagapavansai@gmail.com">Email ↗</a>
              <a
                href="https://www.linkedin.com/in/naga-pavan-sai-gudla-65ba60237/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/gnagapavansai"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-container">
        <a href="#home" className="footer-logo">
          PAVAN<span>.</span>
        </a>
        <p>Designed & developed by Naga Pavan Sai Gudla.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ✕
            </button>

            <span className="project-category">
              {selectedProject.category}
            </span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            {selectedProject.image && (
              <img
                className="modal-project-image"
                src={selectedProject.image}
                alt={`${selectedProject.title} architecture`}
              />
            )}

            <h4>Technologies Used</h4>
            <div className="project-tags">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="button-primary modal-github"
            >
              View GitHub <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;