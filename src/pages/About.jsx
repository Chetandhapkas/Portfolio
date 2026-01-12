
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .about-page {
          min-height: 100vh;
          background-color: #0f172a;
          color: #e5e7eb;
          padding: 70px 80px;
          font-family: "Inter", Arial, sans-serif;
        }

        /* CREATIVE BACK BUTTON */
        .side-back {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(180deg, #2563eb, #1e40af);
          color: #ffffff;
          padding: 14px 10px;
          border-radius: 0 14px 14px 0;
          cursor: pointer;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 0.9rem;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
          transition: all 0.3s ease;
          z-index: 100;
        }

        .side-back:hover {
          padding-left: 16px;
          background: linear-gradient(180deg, #1d4ed8, #1e3a8a);
        }

        .about-container {
          max-width: 1000px;
          margin: auto;
        }

        .about-title {
          font-size: 3rem;
          color: #e2e8f0;
          margin-bottom: 10px;
        }

        .about-subtitle {
          font-size: 1.1rem;
          color: #94a3b8;
          margin-bottom: 40px;
        }

        .about-section {
          margin-bottom: 45px;
        }

        .about-section h2 {
          font-size: 1.6rem;
          color: #bfdbfe;
          margin-bottom: 15px;
        }

        .about-section p {
          font-size: 1rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 15px;
        }

        .about-highlight {
          background-color: #1e293b;
          padding: 30px;
          border-radius: 14px;
        }

        @media (max-width: 768px) {
          .about-page {
            padding: 40px 24px;
          }

          .about-title {
            font-size: 2.3rem;
          }

          .side-back {
            font-size: 0.8rem;
            padding: 10px 8px;
          }
        }
      `}</style>

      {/* CREATIVE SIDE BACK BUTTON */}
      <div className="side-back" onClick={() => navigate(-1)}>
        ← Back to Portfolio
      </div>
 <div className="about-page">
        <div className="about-container">

          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            A motivated engineering student and aspiring Java Developer with a
            strong foundation in programming and frontend development.
          </p>

          {/* INTRODUCTION */}
          <div className="about-section">
            <h2>Introduction</h2>
            <p>
              I am <strong>Chetan Pramodrao Dhapkas</strong>, an engineering student
              pursuing <strong>B.Tech in Information Technology</strong> at
              <strong> Priyadarshini College of Engineering, Nagpur</strong>
              (RTMNU). I am passionate about software development and focused on
              building a strong career as a professional Java Developer.
            </p>

            <p>
              I believe in learning through practical implementation and real-world
              projects rather than relying only on theory. My approach toward
              technology is disciplined, structured, and growth-oriented.
            </p>
          </div>

          {/* TECHNICAL BACKGROUND */}
          <div className="about-section">
            <h2>Technical Background</h2>
            <p>
              I have completed strong foundations in <strong>Core Java, C, and C++</strong>.
              Currently, I am learning <strong>Advanced Java</strong> and backend
              development concepts to understand how scalable and efficient
              applications are built.
            </p>

            <p>
              On the frontend side, I have hands-on experience with
              <strong> React.js, HTML, CSS, and JavaScript</strong>. I actively use
              <strong> AI-assisted development tools</strong> to enhance productivity,
              improve code quality, and maintain clean user interfaces.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="about-section">
            <h2>Professional Experience</h2>
            <p>
              I have worked as a <strong>Frontend Developer Intern</strong> at
              <strong> EzyBytes Web Solution</strong> and later completed a
              <strong> 3-month internship at Amdox Technologies</strong>.
              During these internships, I developed React-based user interfaces,
              worked with APIs, and followed version control practices using Git
              and GitHub.
            </p>
          </div>

          {/* PROJECTS */}
          <div className="about-section">
            <h2>Projects</h2>
            <p>
              I have built multiple academic and practical projects, including a
              <strong> Blood Donor & Receiver System</strong> using React, Node.js,
              and MongoDB, as well as a <strong>School Website</strong> developed
              using React and Java fundamentals.
            </p>
          </div>

          {/* ACHIEVEMENTS & LEADERSHIP */}
          <div className="about-section">
            <h2>Achievements & Leadership</h2>
            <p>
              Along with technical growth, I have actively participated in
              extracurricular and leadership activities. I have served as
              <strong> In-charge and Co In-charge of the Discipline Committee (NSS)</strong>
              and earned multiple certificates at national and state levels.
            </p>

            <p>
              My background in competitive football and mountaineering has helped
              me develop discipline, teamwork, leadership, and the ability to
              perform under pressure.
            </p>
          </div>

          {/* SUMMARY */}
          <div className="about-section about-highlight">
            <h2>Career Objective</h2>
            <p>
              To secure an entry-level software developer role where I can apply
              my knowledge of Java, frontend development, and problem-solving
              skills while continuously learning and contributing to meaningful
              projects.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;