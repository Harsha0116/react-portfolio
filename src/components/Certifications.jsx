function Certifications() {
  const certifications = [
    {
      title: "Red Hat Certified Specialist – EX183",
      issuer: "Red Hat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg",
      link: "https://www.credly.com/badges/341c9c01-6e8c-43b4-b37a-44b19cb2720f/linked_in_profile",
    },
    {
      title: "RPA Automation 360",
      issuer: "Automation Anywhere",
      logo: "data:image/jpeg;base64,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",
      link: "https://certificates.automationanywhere.com/b919a619-21db-4a92-bbb1-845b6e794485",
    },
    {
      title: "Oracle Generative AI",
      issuer: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=763BA3E7E656E7E606E6353E5F5F4F6238AAB1B29F52177893446EDA8DA50AB1",
    },
  ];

  return (
    <section
      id="certifications"
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
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
        }}
      >
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "14px",
                padding: "32px 24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(0, 255, 245, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Logo container */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "14px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "140px",
                  height: "80px",
                }}
              >
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#ffffff",
                  marginBottom: "6px",
                }}
              >
                {cert.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#bdbdbd",
                }}
              >
                {cert.issuer}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
