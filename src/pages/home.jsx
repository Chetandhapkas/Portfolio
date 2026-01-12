import "./Home.css";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Chetan Dhapkas</h1>
          <h2>Java Developer | Frontend & Backend Learner</h2>

          {/* SMALL OBJECTIVE */}
          <p className="objective">
            Objective: To grow as a Java Developer by building practical,
            scalable, and modern applications.
          </p>

          <p>
            I am an engineering student from
            <strong> Priyadarshini College of Engineering, Nagpur (CS branch)</strong>.
            I actively use <strong>AI tools</strong> to enhance frontend development
            productivity while focusing on clean UI, responsiveness, and usability.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn primary">Contact Me</Link>
            <Link to="/projects" className="btn outline">View Projects</Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Chetan Dhapkas" loading="lazy" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about">
        <h3>About Me</h3>

        <p>
          I have completed strong foundations in
          <strong> Core Java, C, and C++</strong>, and I am currently learning
          <strong> Advanced Java</strong>. Alongside this, I am steadily
          learning backend development to become a complete Java-based
          full-stack developer.
        </p>

        <p>
          I have hands-on experience as a
          <strong> Frontend Developer Intern</strong>, where I worked with
          <strong> React, HTML, CSS, and JavaScript</strong>.
          I efficiently leverage AI-assisted tools to speed up development
          while maintaining code quality and best practices.
        </p>

        <p>
          I believe in learning by building real projects rather than relying
          only on theory. My approach focuses on discipline, continuous learning,
          and solving real-world problems through technology.
        </p>
      </section>

      {/* WHAT I DO */}
      <section className="section light">
        <h3>What I Do</h3>

        <div className="cards">
          <div className="card">
            <h4>AI-Assisted Frontend Development</h4>
            <p>
              Building modern, responsive interfaces using React while using AI
              tools to improve speed, design quality, and productivity.
            </p>
          </div>

          <div className="card">
            <h4>Java & Backend Learning</h4>
            <p>
              Strengthening Java fundamentals, Advanced Java concepts,
              and backend development for scalable applications.
            </p>
          </div>

          <div className="card">
            <h4>Problem Solving</h4>
            <p>
              Applying logical thinking and structured programming to create
              clean, efficient, and maintainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section">
        <h3>Highlights</h3>

        <ul className="highlights">
          <li>Frontend Developer Intern (React)</li>
          <li>Core Java, C, and C++ Completed</li>
          <li>Currently Learning Advanced Java</li>
          <li>National Level Certificates</li>
          <li>Mountaineering Certified (Gujarat)</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Let’s Build the Future</h3>
        <p>
          I am open to learning, collaboration, and opportunities that help me
          grow as a Java Developer.
        </p>

        <Link to="/skills" className="btn primary">
          Explore My Skills
        </Link>
      </section>

    </div>
  );
};

export default Home;
