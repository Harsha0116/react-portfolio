function Projects() {
  const projects = [
    {
      title: "Arteon",
      subtitle:
        "A full-stack online art gallery platform enabling artist onboarding, artwork showcase, and seamless user interaction.",
      logo: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
      link: "https://projectarteon.vercel.app/",
      type: "Live Project",
    },
    {
      title: "SLMS",
      subtitle:
        "A Student Learning Management System designed to manage courses, learning resources, and academic workflows efficiently.",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      link: "https://github.com/",
      type: "GitHub Repository",
    },
    {
      title: "MysteryMindscape",
      subtitle:
        "An interactive brain-training game focused on logic, memory, and problem-solving through engaging challenges.",
      logo: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
      link: "https://github.com/Harsha0116/MysteryMindscape",
      type: "GitHub Repository",
    },
    {
      title: "Automation Testing Suite",
      subtitle:
        "A comprehensive Selenium-based automation framework for validating end-to-end e-commerce workflows and regression scenarios.",
      logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      link: "#",
      type: "Automation Project",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "80px 10%",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#00fff5",
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "16px",
                padding: "32px 26px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 36px rgba(0, 255, 245, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Logo */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "14px",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={project.logo}
                  alt={project.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#cfcfcf",
                  lineHeight: "1.6",
                  marginBottom: "18px",
                }}
              >
                {project.subtitle}
              </p>

              {/* Tag */}
              <span
                style={{
                  marginTop: "auto",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  color: "#00fff5",
                }}
              >
                {project.type}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
