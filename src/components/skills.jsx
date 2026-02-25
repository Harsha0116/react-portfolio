function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: "{ }",
      skills: [
        { name: "Java",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
    },
    {
      title: "Frameworks",
      icon: "< />",
      skills: [
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "React.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Django",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" },
        { name: "MERN",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Flutter",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      ],
    },
    {
      title: "Testing & Tools",
      icon: "⚙",
      skills: [
        { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
        { name: "Git",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Postman",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Linux",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Figma",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "DevOps",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
    },
  ];

  const allSkills = skillGroups.flatMap((g) => g.skills);

  return (
    <section
      id="skills"
      style={{
        padding: "120px 8% 0",
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
            What I work with
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
            Tools &{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
              technologies
            </em>{" "}
            I use daily
          </h2>
        </div>

       
      </div>

      {/* ── Skill Groups ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
        {skillGroups.map((group, index) => (
          <div key={index}>

            {/* Group Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: "700",
                  color: "#FF6B00",
                  opacity: 0.6,
                  letterSpacing: "0.1em",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div
                style={{
                  height: "1px",
                  width: "28px",
                  background: "rgba(255,107,0,0.3)",
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: "600",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {group.title}
              </span>
              
              
            </div>

            {/* Skills Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                gap: "12px",
              }}
            >
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    padding: "24px 12px 20px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "18px",
                    cursor: "default",
                    transition: "all 0.25s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                    e.currentTarget.style.borderColor = "#FF6B00";
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,107,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Logo */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Name */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      color: "rgba(255,255,255,0.5)",
                      textAlign: "center",
                      letterSpacing: "0.02em",
                      lineHeight: "1.3",
                    }}
                  >
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Marquee ── */}
<div
  style={{
    marginTop: "80px",
    marginLeft: "-8%",
    marginRight: "-8%",
    width: "100vw",
    borderTop: "1px solid rgba(255,107,0,0.1)",
    borderBottom: "1px solid rgba(255,107,0,0.1)",
    padding: "14px 0",
    overflow: "hidden",
  }}
>
  <div
    style={{
      display: "flex",
      gap: "48px",
      width: "max-content",
      animation: "skills-marquee 30s linear infinite",
    }}
  >
    {[...allSkills, ...allSkills].map((skill, i) => (
      <span
        key={i}
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "0.85rem",
          color: "rgba(196,193,193,0.25)",
          whiteSpace: "nowrap",
          letterSpacing: "0.08em",
        }}
      >
        {skill.name}
        <span style={{ margin: "0 16px", color: "rgba(196,193,193,0.1)" }}>
          ✦
        </span>
      </span>
    ))}
  </div>
</div>

      <style>{`
        @keyframes skills-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Skills;