import arteonImg from "./images/Artgallery.png";
import bookmarkImg from "./images/BookMarkapp.png";
import ecommerceImg from "./images/Ecommerce.png";
import healthImg from "./images/health.png";
import tenderImg from "./images/tender.png";

const techLogos = {
  "Spring Boot":  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "React.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "MySQL":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "REST APIs":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Next.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Supabase":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "TypeScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Zustand":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vercel":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Selenium":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  "JUnit":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Cucumber":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg",
  "Maven":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
  "Django":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "PostgreSQL":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "JWT":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "BeautifulSoup": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
"SQLite":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
"Pytest":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
"Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Arteon",
      subtitle: "Online Art Gallery",
      description:
        "Scalable full-stack Java application with unified login for four user roles, REST APIs, secure payment gateway, and support for 30+ artists with 90% uptime.",
      tags: ["Spring Boot", "React.js", "MySQL", "REST APIs"],
      live: "https://arteonproject.vercel.app/",
      github: "https://github.com/Harsha0116/ArteonFrontend",
      // ↓ REPLACE with your actual project screenshot import or URL
      image: arteonImg,
      imageAlt: "Arteon project screenshot",
    },
    {
      number: "02",
      title: "Smart Bookmark App",
      subtitle: "Real-Time Bookmark Manager",
      description:
        "Full-stack app with Google OAuth, per-user data isolation using Row Level Security, and real-time multi-tab synchronization powered by Supabase Realtime.",
      tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Zustand", "Vercel"],
      live: "https://smart-bookmark-app-pi-lemon.vercel.app/",
      github: "https://github.com/Harsha0116/smart-bookmark-app",
      // ↓ REPLACE with your actual project screenshot import or URL
      image: bookmarkImg,
      imageAlt: "Smart Bookmark App screenshot",
    },
    {
      number: "03",
      title: "E-Commerce Automation Suite",
      subtitle: "Automation Testing Framework",
      description:
        "Robust automation framework for key shopping workflows with 20+ test cases, achieving over 90% pass rate on critical and negative test scenarios.",
      tags: ["Selenium", "JUnit", "Cucumber", "Maven"],
      live: null,
      github: "https://github.com/Harsha0116",
      // ↓ REPLACE with your actual project screenshot import or URL
      image: ecommerceImg,
      imageAlt: "Automation Suite screenshot",
    },
    {
      number: "04",
      title: "Healthcare Backend",
      subtitle: "Django REST API",
      description:
        "Secure, production-ready healthcare application backend built using Django REST Framework with PostgreSQL and JWT authentication.",
      tags: ["Django", "PostgreSQL", "JWT", "REST APIs"],
      live: null,
      github: "https://github.com/Harsha0116/HealthCare-Backend",
      // ↓ REPLACE with your actual project screenshot import or URL
      image: healthImg,
      imageAlt: "Healthcare Backend screenshot",
    },
    {
  number: "05",
  title: "Tender Scraper",
  subtitle: "Production-Grade Web Scraper",
  description:
    "A production-minded Python scraper for nprocure.com that reverse-engineers AES-128-CBC encrypted API payloads, extracts ~3800 live tender listings, normalises the data, and stores run-level metadata in SQLite for full observability. Fully idempotent with incremental mode, CLI flags, retry logic and a test suite covering all pipeline stages.",
  tags: ["Python", "BeautifulSoup", "SQLite", "Pytest"],
  live: null,
  github: "https://github.com/Harsha0116/Tender_Scraper",
  // ↓ REPLACE with your actual project screenshot import or URL
  image: tenderImg,
  imageAlt: "Tender Scraper screenshot",
},
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "120px 8%",
        background: "#000",
        borderTop: "1px solid rgba(255,107,0,0.1)",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "72px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: "600",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FF6B00",
              opacity: 0.7,
              marginBottom: "14px",
            }}
          >
            Selected Work
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
            }}
          >
            Things I've{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
              built
            </em>{" "}
            and shipped
          </h2>
        </div>
        <a
        
          href="https://github.com/Harsha0116"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#FF6B00";
            e.currentTarget.style.color = "#FF6B00";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
          }}
        >
          View all on GitHub ↗
        </a>
      </div>

      {/* ── Stacked Project Cards ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "24px",
              padding: "36px 40px",
              transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FF6B00";
              e.currentTarget.style.background = "rgba(255,107,0,0.04)";
              e.currentTarget.style.boxShadow = "0 0 48px rgba(255,107,0,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.boxShadow = "none";
            }}
            className="project-card"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "40px",
                alignItems: "start",
              }}
              className="project-card-inner"
            >
              {/* ── LEFT: Content ── */}
              <div>
                {/* Number + Subtitle */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: "700",
                      letterSpacing: "0.14em",
                      color: "#FF6B00",
                      opacity: 0.7,
                    }}
                  >
                    {project.number}
                  </span>
                  <div
                    style={{
                      height: "1px",
                      width: "24px",
                      background: "rgba(255,107,0,0.3)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: "600",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {project.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: "400",
                    color: "#fff",
                    lineHeight: "1.1",
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.92rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: "1.75",
                    maxWidth: "560px",
                    marginBottom: "28px",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "32px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                        padding: "6px 14px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "999px",
                        transition: "border-color 0.2s, background 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,107,0,0.5)";
                        e.currentTarget.style.background = "rgba(255,107,0,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      }}
                    >
                      {techLogos[tag] && (
                        <img
                          src={techLogos[tag]}
                          alt={tag}
                          style={{ width: "14px", height: "14px", objectFit: "contain" }}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      )}
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.72rem",
                          fontWeight: "500",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

                  {/* Live button — only if live link exists */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "999px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: "500",
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#4ade80";
                        e.currentTarget.style.background = "rgba(74,222,128,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      }}
                    >
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#4ade80",
                          display: "inline-block",
                          animation: "pulse-dot 2s ease-in-out infinite",
                        }}
                      />
                      <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>
                        Live
                      </span>
                    </a>
                  )}

                  {/* GitHub button — always shown */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "999px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: "500",
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#FF6B00";
                        e.currentTarget.style.background = "rgba(255,107,0,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="rgba(255,255,255,0.7)"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* ── RIGHT: Clickable Image Card ── */}
              <a
                href={project.live || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "280px",
                  flexShrink: 0,
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  textDecoration: "none",
                  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FF6B00";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,107,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                className="project-image-card"
              >
                {/* ── IMAGE AREA — replace `project.image` with your screenshot ── */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    style={{
                      width: "100%",
                      aspectRatio: "16/10",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  /* Placeholder shown until you add images */
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/10",
                      background: "rgba(255,107,0,0.04)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span style={{ fontSize: "1.8rem", opacity: 0.2 }}>🖼</span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.68rem",
                        color: "rgba(255,255,255,0.2)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Add screenshot here
                    </span>
                  </div>
                )}

                {/* Card Footer */}
                <div
                  style={{
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {project.title}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "rgba(255,107,0,0.6)" }}>
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        @media (max-width: 900px) {
          .project-card-inner {
            grid-template-columns: 1fr !important;
          }
          .project-image-card {
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .project-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;