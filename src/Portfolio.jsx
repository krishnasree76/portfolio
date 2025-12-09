// src/Portfolio.jsx
import React, { useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaServer,
  FaChartBar,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Portfolio.css";
import profileImg from "./assets/profile.jpg"; // or your actual file name

const Portfolio = () => {
  // EmailJS form reference
  const formRef = useRef(null);

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_noovsyg",      // your EmailJS service ID
        "template_h415atk",     // your EmailJS template ID
        formRef.current,
        "tM9eDbgDko1-UjJaD"     // your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully! I will get back to you soon.");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="pf-root">
      {/* Navbar */}
      <nav className="pf-nav">
        <div className="pf-nav-left">
          <span className="pf-logo">KR</span>
          <span className="pf-brand">Krishna Raja Sree</span>
        </div>
        <div className="pf-nav-right">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact" className="pf-nav-btn">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pf-section pf-hero">
        <div className="pf-hero-text">
          <p className="pf-hero-tag">Full-Stack Web Developer</p>
          <h1>
            Hello, it&apos;s me <span>Krishna Raja Sree</span>
          </h1>
          <h2>
            I&apos;m a <span className="pf-highlight">MERN Stack Developer</span>
          </h2>
          <p className="pf-hero-desc">
            I build scalable, responsive web applications that solve real-world
            problems using MongoDB, Express, React, and Node.js. I love turning
            ideas into clean, modern digital experiences.
          </p>
          <div className="pf-hero-actions">
            <a href="#projects" className="pf-btn pf-btn-primary">
              View Projects
            </a>
            <a href="#contact" className="pf-btn pf-btn-outline">
              Let&apos;s Collaborate
            </a>
            <a
              href="/KrishnaRajaSree_Resume.pdf"
              className="pf-btn pf-btn-outline"
              download
            >
              <FaDownload style={{ marginRight: "8px" }} />
              Download Resume
            </a>
          </div>

          <div className="pf-socials">
            <a
              href="mailto:sreebonam555@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-raja-sree-bonam-7b6079257/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/krishnasree76"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="pf-hero-photo-wrapper">
          <div className="pf-hero-photo-circle">
            <img src={profileImg} alt="Krishna Raja Sree" />
          </div>

          <div className="pf-hero-badge">
            <p>Available for Freelance</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="pf-section pf-about">
        <div className="pf-section-header">
          <h2>About Me</h2>
          <p>A quick snapshot of who I am and what I do.</p>
        </div>
        <div className="pf-about-content">
          <p>
            I am a passionate <strong>Full-Stack Web Developer</strong> with a
            strong focus on the <strong>MERN stack</strong>. I love building
            products that are not just functional, but also intuitive and
            delightful to use.
          </p>
          <p>
            I&apos;ve worked on platforms such as a{" "}
            <strong>Book Exchange Platform</strong>,{" "}
            <strong>Smart PDF Chatbot</strong>, and multiple full-stack
            applications. I care about clean architecture, reusable components,
            and performance.
          </p>
          <p>
            Currently, I&apos;m pursuing{" "}
            <strong>B.Tech in Computer Science and Cyber Security</strong> and I
            am open to <strong>freelance work, internships,</strong> and{" "}
            <strong>remote opportunities</strong> in web development and
            full-stack engineering.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="pf-section pf-skills">
        <div className="pf-section-header">
          <h2>Skills</h2>
          <p>Technologies I work with on a daily basis.</p>
        </div>
        <div className="pf-skills-grid">
          <div className="pf-skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript (ES6)</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="pf-skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="pf-skill-card">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="pf-skill-card">
            <h3>Programming</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="pf-skill-card">
            <h3>Data & ML</h3>
            <ul>
              <li>NumPy, Pandas</li>
              <li>TensorFlow</li>
            </ul>
          </div>
          <div className="pf-skill-card">
            <h3>Tools & Others</h3>
            <ul>
              <li>Tableau</li>
              <li>Git &amp; GitHub</li>
              <li>Cybersecurity Basics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="pf-section pf-services">
        <div className="pf-section-header">
          <h2>Services</h2>
          <p>How I can help you and your business grow.</p>
        </div>
        <div className="pf-services-grid">
          <div className="pf-service-card">
            <div className="pf-service-icon">
              <FaCode />
            </div>
            <h3>Portfolio & Landing Pages</h3>
            <p>
              Clean, modern, and responsive portfolio sites and landing pages
              tailored for students, job seekers, and professionals.
            </p>
          </div>
          <div className="pf-service-card">
            <div className="pf-service-icon">
              <FaServer />
            </div>
            <h3>MERN Web Apps</h3>
            <p>
              Full-stack web apps with authentication, dashboards, REST APIs,
              and database integration using the MERN stack.
            </p>
          </div>
          <div className="pf-service-card">
            <div className="pf-service-icon">
              <FaChartBar />
            </div>
            <h3>Data Dashboards</h3>
            <p>
              Interactive dashboards using Tableau and custom web dashboards to
              visualize data and generate insights.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pf-section pf-projects">
        <div className="pf-section-header">
          <h2>Featured Projects</h2>
          <p>Some of the work I&apos;m proud of.</p>
        </div>

        <div className="pf-projects-grid">
          {/* Book Exchange Platform */}
          <div className="pf-project-card">
            <h3>Book Exchange Platform (MERN)</h3>
            <p>
              A full-stack web application that enables students to list, search,
              and exchange books within their community. Includes secure login,
              book management, and a smooth user experience.
            </p>

            <p className="pf-project-stack">
              Stack: MongoDB, Express.js, React.js, Node.js
            </p>

            <div className="pf-project-links">
              <a
                href="https://bookexchangeplatform.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/krishnasree76/BookExchangePlatform"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-outline"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* College Chronicle */}
          <div className="pf-project-card">
            <h3>College Chronicle (MERN)</h3>
            <p>
              A centralized portal for managing college announcements, resources,
              and event updates with role-based access for admins and students.
            </p>
            <p className="pf-project-stack">
              Stack: React, Node.js, Express, MongoDB
            </p>
            <div className="pf-project-links">
              <a
                href="https://collegechronicle-alpha.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/krishnasree76/College-Chronicle"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-outline"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* Smart PDF Chatbot */}
          <div className="pf-project-card">
            <h3>Smart PDF Chatbot (React + LLM)</h3>
            <p>
              An AI-powered chatbot that allows users to upload PDFs, ask natural
              language questions, use voice input, and compare multiple documents
              with automated insights.
            </p>
            <p className="pf-project-stack">
              Stack: React, pdf-parse, Web Speech API, LLM API
            </p>

            <div className="pf-project-links">
              <a
                href="https://smartpdfchatbot.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/krishnasree76/Smart-PDF-Chatbot/tree/master"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-outline"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* Netflix Dashboard */}
          <div className="pf-project-card">
            <h3>Netflix TV Shows & Movies Dashboard (Tableau)</h3>
            <p>
              An interactive Tableau dashboard built using the Netflix titles
              dataset to analyze content by genre, country, ratings, and release
              year. Helps users explore viewing trends and understand the
              composition of the Netflix library.
            </p>

            <p className="pf-project-stack">
              Stack: Tableau, CSV/Excel (Netflix Titles Dataset), Data
              Visualization
            </p>

            <div className="pf-project-links">
              <a
                href="https://public.tableau.com/app/profile/krishna.raja.sree.bonam/viz/NetflixDashboard_17456785051100/Dashboard1"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-primary"
              >
                View Dashboard
              </a>
              <a
                href="https://github.com/krishnasree76/Netflix-Tv-Shows-Series-Dashboard"
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-outline"
              >
                Project Files (GitHub)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pf-section pf-contact">
        <div className="pf-section-header">
          <h2>Let&apos;s Work Together</h2>
          <p>
            Looking for a developer for your next project, portfolio, or
            dashboard? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="pf-contact-content">
          <div className="pf-contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:sreebonam555@gmail.com">
                sreebonam555@gmail.com
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/krishna-raja-sree-bonam-7b6079257/"
                target="_blank"
                rel="noreferrer"
              >
                Krishna Raja Sree Bonam
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/krishnasree76"
                target="_blank"
                rel="noreferrer"
              >
                krishnasree76
              </a>
            </p>

            <p>
              <strong>Resume:</strong>{" "}
              <a
                href="/KrishnaRajaSree_Resume.pdf"
                download
                target="_blank"
                rel="noreferrer"
              >
                Download PDF
              </a>
            </p>

            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/919063643676?text=Hi%20Krishna,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          <form
            ref={formRef}
            className="pf-contact-form"
            onSubmit={handleSendEmail}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
            />
            <button type="submit" className="pf-btn pf-btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="pf-footer">
        <p>
          © {new Date().getFullYear()} Krishna Raja Sree · Built with ❤️ using
          React.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
