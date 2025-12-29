import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "40px 10%",
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
      }}
    >
      {/* Footer Text */}
      <p
        style={{
          fontSize: "0.95rem",
          color: "#cfcfcf",
          textAlign: "center",
          maxWidth: "700px",
          lineHeight: "1.6",
        }}
      >
        Open to internships, full-time opportunities, and collaborations.
        Feel free to reach out via email.
      </p>

      {/* Email Link */}
      <a
        href="mailto:harshavardhan16.venigalla@gmail.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "1rem",
          fontWeight: "600",
          color: "#00fff5",
          textDecoration: "none",
          borderBottom: "1px solid transparent",
          transition: "border-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderBottomColor = "#00fff5")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderBottomColor = "transparent")
        }
      >
        <FaEnvelope />
        harshavardhan16.venigalla@gmail.com
      </a>

      {/* Footer Bottom */}
      <span
        style={{
          fontSize: "0.8rem",
          color: "#8f8f8f",
          marginTop: "10px",
        }}
      >
        © {new Date().getFullYear()} Harsha V Vardhan
      </span>
    </footer>
  );
}

export default Contact;
