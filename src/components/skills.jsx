function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
        { name: "C", logo: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
        { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: "HTTP", logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
        { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/919/919832.png" },
      ],
    },
    {
      title: "Frameworks & Testing",
      skills: [
        { name: "Spring Boot", logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
        { name: "MERN Stack", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
        { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
        { name: "Selenium", logo: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg" },
        { name: "JUnit", logo: "https://cdn.worldvectorlogo.com/logos/junit-4.svg" },
        { name: "Cucumber", logo: "https://cdn.worldvectorlogo.com/logos/cucumber.svg" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
        { name: "Postman", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
        { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
        { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg" },
        { name: "Jenkins", logo: "https://cdn.worldvectorlogo.com/logos/jenkins.svg" },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
        Technical Skills
      </h2>

      {skillGroups.map((group, index) => (
        <div key={index} style={{ marginBottom: "50px" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              color: "#ffffff",
              marginBottom: "25px",
            }}
          >
            {group.title}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "25px",
            }}
          >
            {group.skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "14px",
                  padding: "20px",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 255, 245, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "10px",
                    padding: "10px",
                    marginBottom: "12px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    color: "#eaeaea",
                  }}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
