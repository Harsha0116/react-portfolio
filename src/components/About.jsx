import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function About() {
  return (
    <section
      id="about"
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
          marginBottom: "30px",
        }}
      >
        About Me
      </h2>

      <p
        style={{
          maxWidth: "750px",
          color: "#cfcfcf",
          fontSize: "1rem",
          lineHeight: "1.7",
          marginBottom: "35px",
        }}
      >
        I am a final-year B.Tech student with a strong focus on full-stack
        development, automation testing, and DevOps practices. I enjoy building
        scalable web applications using modern technologies and continuously
        improving my problem-solving skills through hands-on projects and coding
        platforms.
      </p>

      <div
        style={{
          display: "flex",
          gap: "28px",
          fontSize: "1.9rem",
        }}
      >
        <a
          href="https://github.com/Harsha0116/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub color="#00fff5" />
        </a>

        <a
          href="https://leetcode.com/u/Harsha116/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <SiLeetcode color="#00fff5" />
        </a>

        <a
          href="https://www.codechef.com/users/klu_2200031719"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodeChef"
        >
          <SiCodechef color="#00fff5" />
        </a>

        <a
          href="https://www.linkedin.com/in/harsha-vardhan-venigalla-ba2b31251/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin color="#00fff5" />
        </a>
      </div>
    </section>
  );
}

export default About;
