import { useEffect, useState } from "react";
import "./index.css";

/* =========================================================
   FILE PATHS
========================================================= */

const RESUME_URL = "/Ashwini_K_V_resume.pdf";
const PROFILE_URL = "/profile.jpg";

/* =========================================================
   NAVIGATION
========================================================= */

const NAV = [
  "Home",
  "About",
  "Resume",
  "Services",
  "Portfolio",
  "Contact",
];

/* =========================================================
   ICONS
========================================================= */

function Icon({ type, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (type) {
    /* =========================
       GITHUB
    ========================= */
    case "github":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );

    /* =========================
       LINKEDIN
    ========================= */
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 11v6" />
          <path d="M8 8v.01" />
          <path d="M12 17v-6" />
          <path d="M12 14c0-2 1-3 3-3s3 1 3 3v3" />
        </svg>
      );

    /* =========================
       MAIL
    ========================= */
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    /* =========================
       MAP
    ========================= */
    case "map":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    /* =========================
       PHONE
    ========================= */
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
        </svg>
      );

    /* =========================
       MENU
    ========================= */
    case "menu":
      return (
        <svg {...common}>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      );

    /* =========================
       CLOSE
    ========================= */
    case "close":
      return (
        <svg {...common}>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      );

    /* =========================
       FULL STACK / CODE
    ========================= */
    case "code":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );

    /* =========================
       FRONTEND DEVELOPMENT
       NEW
    ========================= */
    case "layout":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="8" y1="8" x2="8" y2="21" />
          <line x1="5" y1="5.5" x2="5.01" y2="5.5" />
          <line x1="7" y1="5.5" x2="7.01" y2="5.5" />
          <line x1="9" y1="5.5" x2="9.01" y2="5.5" />
        </svg>
      );

    /* =========================
       SOFTWARE APPLICATION
       DEVELOPMENT
       NEW
    ========================= */
    case "app":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="8" y1="11" x2="16" y2="11" />
          <line x1="8" y1="15" x2="13" y2="15" />
          <circle cx="16" cy="16" r="2" />
        </svg>
      );

    /* =========================
       AI / ML
    ========================= */
    case "brain":
      return (
        <svg {...common}>
          <path d="M9.5 3.5a3 3 0 0 0-3 3v.3a3.5 3.5 0 0 0-2 6.2 3.5 3.5 0 0 0 3 5.5h2V4.5a3 3 0 0 0 0-1Z" />
          <path d="M14.5 3.5a3 3 0 0 1 3 3v.3a3.5 3.5 0 0 1 2 6.2 3.5 3.5 0 0 1-3 5.5h-2V4.5a3 3 0 0 1 0-1Z" />
          <path d="M9.5 9h-2" />
          <path d="M14.5 9h2" />
          <path d="M9.5 14h-2" />
          <path d="M14.5 14h2" />
        </svg>
      );

    /* =========================
       BACKEND / SERVER
    ========================= */
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1" />
          <rect x="3" y="14" width="18" height="6" rx="1" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
          <line x1="7" y1="17" x2="7.01" y2="17" />
          <line x1="11" y1="7" x2="17" y2="7" />
          <line x1="11" y1="17" x2="17" y2="17" />
        </svg>
      );

    /* =========================
       CLOUD / AWS
       NEW
    ========================= */
    case "cloud":
      return (
        <svg {...common}>
          <path d="M17.5 19H9a6 6 0 1 1 1.2-11.88A7 7 0 0 1 23 10a5 5 0 0 1-5.5 9Z" />
          <path d="M8 16h8" />
          <path d="m11 13-3 3 3 3" />
        </svg>
      );

    /* =========================
       BUG
    ========================= */
    case "bug":
      return (
        <svg {...common}>
          <rect x="8" y="7" width="8" height="12" rx="4" />
          <path d="M12 3v4" />
          <path d="M8 11H4" />
          <path d="M20 11h-4" />
          <path d="M8 15H4" />
          <path d="M20 15h-4" />
          <path d="m6 7-2-2" />
          <path d="m18 7 2-2" />
        </svg>
      );

    /* =========================
       FILE
    ========================= */
    case "file":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
        </svg>
      );

    /* =========================
       DOWNLOAD
    ========================= */
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      );

    /* =========================
       EXTERNAL
    ========================= */
    case "external":
      return (
        <svg {...common}>
          <path d="M14 3h7v7" />
          <path d="M10 14 21 3" />
          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
        </svg>
      );

    /* =========================
       WHATSAPP
    ========================= */
    case "whatsapp":
      return (
        <svg
          {...common}
          fill="currentColor"
          stroke="none"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.32.22 11.87c0 2.09.55 4.13 1.59 5.93L.1 24l6.34-1.66a11.86 11.86 0 0 0 5.66 1.44h.01c6.54 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.14-3.46-8.43ZM12.11 21.74h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.86 9.86 0 0 1-1.51-5.23C2.21 6.42 6.65 2 12.11 2a9.85 9.85 0 0 1 7.01 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.44 9.89-9.91 9.89Zm5.43-7.4c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      );

    default:
      return null;
  }
}

/* =========================================================
   SOCIALS
========================================================= */

const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/AshwiniKV21",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ashwini-shetty-717862287",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:ashwinikv0321@gmail.com",
    icon: "mail",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [
  {
    group: "Programming & Web",
    items: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "React.js",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    group: "Backend & Tools",
    items: [
      "Django",
      "Flask",
      "REST APIs",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
  {
    group: "Databases",
    items: ["MySQL", "Oracle SQL", "MongoDB"],
  },
  {
    group: "AI/ML & Cloud",
    items: [
      "AI",
      "ML",
      "Generative AI",
      "AWS",
      "LLMs",
    ],
  },
  {
    group: "Core Concepts",
    items: [
      "OOP",
      "DBMS",
      "DSA",
      "Software Testing",
      "Automation (Fundamentals)",
    ],
  },
];

/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  {
    icon: "code",
    title: "Full Stack Web Development",
    text: "Responsive web applications built with HTML, CSS, JavaScript, React, Python, Django and Flask.",
  },
  {
    icon: "layout",
    title: "Frontend Development",
    text: "Modern and responsive user interfaces built with HTML, CSS, JavaScript, React and Bootstrap.",
  },
  {
    icon: "app",
    title: "Software Application Development",
    text: "Scalable software applications designed to solve real-world problems with clean architecture and user-friendly interfaces.",
  },
  {
    icon: "server",
    title: "Backend & REST API Development",
    text: "Scalable backend applications and REST APIs developed with Python, Django and Flask for reliable application functionality.",
  },
  {
    icon: "brain",
    title: "AI & Machine Learning",
    text: "Machine learning solutions including data preprocessing, model development, prediction systems and ML model integration.",
  },
  {
    icon: "cloud",
    title: "Cloud & AWS",
    text: "Cloud-based application solutions using AWS services, monitoring, deployment and cloud infrastructure concepts.",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const PROJECTS = [
  {
    title: "Air Quality Prediction System",
    subtitle: "Machine Learning Web Application",
    image: "/projects/air-quality-website.png",
    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "ML",
    ],
    text: "A machine learning web application for predicting air quality using environmental data with preprocessing, analysis and a user-friendly web interface.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },

  {
    title: "Plant Disease Detection System",
    subtitle: "Image Classification Web Application",
    image: "/projects/plant-disease-website.png",
    tech: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "ML",
    ],
    text: "A web application for identifying plant diseases from leaf images using image preprocessing, dataset analysis and machine learning.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },

  {
    title: "AWS Student Activity Monitoring and Alert System",
    subtitle: "Student Activity Monitoring and Alert Web Application",
    image: "/projects/aws-monitoring-website.png",
    tech: [
      "AWS",
      "Python",
      "HTML",
      "CSS",
      "Javascript",
      "Mysql",
      "django"
    ],
    text: "A cloud-based student activity monitoring application designed around monitoring functionality and alerts.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },

  {
    title: "Job Portal Web Application",
    subtitle: "Job Search & Recruitment Website",
    image: "/projects/job-portal-website.png",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "SQL",
      "Django"
    ],
    text: "A job portal web application designed to organize job opportunities and provide a structured interface for job seekers.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },

  {
    title: "Car Parking System",
    subtitle: "Parking Management Web Application",
    image: "/projects/car-parking-website.png",
    tech: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "SQL",
    ],
    text: "A parking management web application designed to organize vehicle information and parking-space management.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },

  {
    title: "Train Ticket Booking System",
    subtitle: "Online Railway Reservation Website",
    image: "/projects/train-ticket-booking-website.png",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Django",
      "SQL",
    ],
    text: "A train ticket booking web application that allows users to search trains, check journey details, select travel options and manage ticket reservations through an easy-to-use interface.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },

  {
    title: "UniHeal Medical Tourism Website",
    subtitle: "Medical Tourism Web Application",
    image: "/projects/uniheal-website.png",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js"
    ],
    text: "A responsive medical tourism website designed to present healthcare information, medical services and tourism-related resources.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },

  {
    title: "Product Management System",
    subtitle: "Product & Inventory Management",
    image: "/projects/product-management-website.png",
    tech: [
      "Python",
      "Django",
      "SQL",
      "HTML",
      "CSS",
    ],
    text: "A product management web application for organizing product information and supporting basic product management operations.",
    github: "https://github.com/AshwiniKV21",
    live: "",
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const CERTS = [
  "Python Full Stack Development – QSpiders",
  "AI For Beginners – HP LIFE",
  "Generative AI – DevTown",
];

/* =========================================================
   CONTACT
========================================================= */

const CONTACT = {
  address: "Bengaluru, Karnataka, India",
  phone: "+91 76765 51509",
  phoneLink: "tel:+917676551509",
  email: "ashwinikv0321@gmail.com",
  whatsapp: "917676551509",
  mapEmbed:
    "https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Bengaluru,Karnataka",
};

/* =========================================================
   SOCIALS COMPONENT
========================================================= */

function Socials() {
  return (
    <div className="socials">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={
            social.name === "Email"
              ? undefined
              : "_blank"
          }
          rel={
            social.name === "Email"
              ? undefined
              : "noopener noreferrer"
          }
          aria-label={social.name}
          title={social.name}
        >
          <Icon
            type={social.icon}
            size={20}
          />
        </a>
      ))}
    </div>
  );
}

/* =========================================================
   PROJECT IMAGE
========================================================= */

function ProjectImage({ src, alt, title }) {
  const [imageError, setImageError] =
    useState(false);

  if (imageError) {
    return (
      <div className="project-img project-img-fallback">
        <div className="mock-bar">
          <i />
          <i />
          <i />
        </div>

        <div className="mock-body">
          <Icon type="file" size={38} />

          <strong>{title}</strong>

          <span>
            Add screenshot to:
            <br />
            public{src}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-img">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

/* =========================================================
   PROJECT GRID
========================================================= */

function ProjectGrid() {
  return (
    <div className="project-grid">
      {PROJECTS.map((project) => (
        <article
          key={project.title}
          className="card project"
        >
          <ProjectImage
            src={project.image}
            alt={`${project.title} website screenshot`}
            title={project.title}
          />

          <div className="project-body">
            <h4>{project.title}</h4>

            <p className="project-subtitle">
              {project.subtitle}
            </p>

            {project.text && (
              <p className="project-text">
                {project.text}
              </p>
            )}

            {Array.isArray(project.tech) &&
              project.tech.length > 0 && (
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small"
                >
                  <Icon
                    type="github"
                    size={17}
                  />
                  Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small outline"
                >
                  <Icon
                    type="external"
                    size={17}
                  />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* =========================================================
   WHATSAPP BUTTON
========================================================= */

function WhatsAppButton() {
  const whatsappUrl =
    `https://wa.me/${CONTACT.whatsapp}` +
    `?text=${encodeURIComponent(
      "Hi Ashwini, I visited your portfolio and would like to connect with you."
    )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with me on WhatsApp"
      title="Chat with me on WhatsApp"
    >
      <Icon
        type="whatsapp"
        size={30}
      />
    </a>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

function HomePage({ goToPage }) {
  const [photoOk, setPhotoOk] =
    useState(true);

  return (
    <section className="page hero-page">
      <div className="hero-inner">
        <div className="hero-text page-content-animation">
          <p className="hello animate-item">
            Hello, I'm
          </p>

          <h1 className="animate-item">
            Ashwini K V
          </h1>

          <p className="tagline animate-item">
            I'm a professional Web Developer | Software Developer | Full Stack Developer | Software engineer
          </p>

          <div className="btn-row animate-item">
            <button
              type="button"
              className="btn"
              onClick={() =>
                goToPage("About")
              }
            >
              About Me
            </button>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Icon
                type="file"
                size={17}
              />
              Resume
            </a>
          </div>

          <div className="animate-item">
            <Socials />
          </div>
        </div>

        <div className="hero-photo page-content-animation">
          {photoOk ? (
            <img
              className="animate-item"
              src={PROFILE_URL}
              alt="Ashwini K V"
              onError={() =>
                setPhotoOk(false)
              }
            />
          ) : (
            <div className="initials animate-item">
              AK
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function AboutPage() {
  return (
    <section className="page page-standard">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">
          About Me
        </h2>

        <p className="lead animate-item">
          Aspiring Software Developer with hands-on experience
          in Python, Django, SQL, HTML, CSS and JavaScript
          through a full-stack development internship and
          academic projects. I have a strong understanding of
          Object-Oriented Programming, database concepts, web
          development and problem-solving, and I enjoy building
          responsive web applications with both frontend and
          backend functionality. I'm a quick learner, eager to
          pick up new technologies and contribute to software
          development teams.
        </p>

        <div className="info-grid animate-item">
          <div>
            <b>Location</b>
            <span>Bengaluru, India</span>
          </div>

          <div>
            <b>Email</b>
            <span>{CONTACT.email}</span>
          </div>

          <div>
            <b>Phone</b>
            <span>{CONTACT.phone}</span>
          </div>

          <div>
            <b>Education</b>
            <span>MCA </span>
          </div>
        </div>

        <h3 className="center animate-item">
          Skills
        </h3>

        <div className="skill-groups">
          {SKILLS.map((group, index) => (
            <div
              key={group.group}
              className="card animate-item"
              style={{
                animationDelay: `${
                  0.35 + index * 0.08
                }s`,
              }}
            >
              <h4>{group.group}</h4>

              <div className="tags">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tag"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RESUME PAGE
========================================================= */

function ResumePage() {
  return (
    <section className="page page-standard page-alt">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">
          Resume
        </h2>

        <div className="two-col">
          <div className="animate-item">
            <h3>Experience</h3>

            <div className="timeline">
              <div className="item">
                <span className="date">
                  Mar 2026 – May 2026
                </span>

                <h4>
                  Full Stack Development Intern – DecodeLabs
                </h4>

                <ul>
                  <li>
                    Gained practical experience in full-stack
                    web development using HTML, CSS,
                    JavaScript, Python and SQL.
                  </li>

                  <li>
                    Developed an understanding of
                    frontend-backend integration, database
                    management and responsive web application
                    development.
                  </li>

                  <li>
                    Participated in application development,
                    testing and debugging to identify and
                    resolve technical issues.
                  </li>

                  <li>
                    Strengthened problem-solving and technical
                    skills through hands-on development and
                    version control using Git and GitHub.
                  </li>
                </ul>
              </div>
            </div>

            <h3>Certifications</h3>

            <div className="timeline">
              {CERTS.map((certification) => (
                <div
                  className="item"
                  key={certification}
                >
                  <h4>{certification}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-item">
            <h3>Education</h3>

            <div className="timeline">
              <div className="item">
                <span className="date">
                  2025 – 2027
                </span>

                <h4>
                  Master of Computer Applications (MCA)
                </h4>

                <p>
                  <i>
                    Seshadripuram College, Bangalore
                  </i>
                </p>

                <p>
                  Focused on advanced computer applications
                  including software development, database
                  management and web technologies.
                </p>
              </div>

              <div className="item">
                <span className="date">
                  2022 – 2025
                </span>

                <h4>
                  Bachelor of Computer Applications (BCA)
                </h4>

                <p>
                  <i>
                    Maharani Lakshmi Ammanni College for
                    Women, Bangalore
                  </i>
                </p>

                <p>
                  Studied programming, database systems, web
                  development and software engineering.
                </p>
              </div>
            </div>

            <div className="resume-actions">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Icon
                  type="file"
                  size={17}
                />
                View Resume
              </a>

              <a
                href={RESUME_URL}
                download="Ashwini_K_V_resume.pdf"
                className="btn"
              >
                <Icon
                  type="download"
                  size={17}
                />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICES PAGE
========================================================= */

function ServicesPage() {
  return (
    <section className="page page-standard">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">
          Services
        </h2>

        <p className="lead page-intro animate-item">
          Technologies and development areas I work with.
        </p>

        <div className="service-grid">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="card service animate-item"
              style={{
                animationDelay: `${
                  0.15 + index * 0.1
                }s`,
              }}
            >
              <div className="icon">
                <Icon
                  type={service.icon}
                  size={30}
                />
              </div>

              <h4>{service.title}</h4>

              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PORTFOLIO PAGE
========================================================= */

function PortfolioPage() {
  return (
    <section className="page page-standard page-alt">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">
          Portfolio
        </h2>

        <p className="lead page-intro animate-item">
          Here are some of the projects I have built.
        </p>

        <div className="animate-item">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function ContactPage() {
  return (
    <section className="page page-standard">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">
          Contact
        </h2>

        <p className="lead page-intro animate-item">
          Have a project in mind or want to collaborate? Feel
          free to reach out. I'm looking for Software / Full
          Stack Developer opportunities.
        </p>

        <div className="contact-wrapper animate-item">
          <div className="card contact-card">
            <div className="contact-row">
              <span className="ci">
                <Icon
                  type="map"
                  size={20}
                />
              </span>

              <div>
                <b>Address</b>
                <span>{CONTACT.address}</span>
              </div>
            </div>

            <div className="contact-row">
              <span className="ci">
                <Icon
                  type="phone"
                  size={20}
                />
              </span>

              <div>
                <b>Phone</b>

                <a href={CONTACT.phoneLink}>
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="contact-row">
              <span className="ci">
                <Icon
                  type="mail"
                  size={20}
                />
              </span>

              <div>
                <b>Email</b>

                <a
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="contact-social">
              <Socials />
            </div>

            <div className="map-box">
              <iframe
                title="My location on Google Maps"
                src={CONTACT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <a
                href={CONTACT.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open"
              >
                Open in Maps

                <Icon
                  type="external"
                  size={14}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const getInitialPage = () => {
    const pageFromHash =
      window.location.hash.replace(
        "#",
        ""
      );

    const validPage = NAV.find(
      (item) =>
        item.toLowerCase() ===
        pageFromHash.toLowerCase()
    );

    return validPage || "Home";
  };

  const [activePage, setActivePage] =
    useState(getInitialPage);

  const [menuOpen, setMenuOpen] =
    useState(false);

  /* ---------------------------------------------------------
     NAVIGATE BETWEEN PAGES
  --------------------------------------------------------- */

  const goToPage = (page) => {
    setActivePage(page);
    setMenuOpen(false);

    window.history.pushState(
      { page },
      "",
      `#${page.toLowerCase()}`
    );

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  /* ---------------------------------------------------------
     SUPPORT BROWSER BACK/FORWARD
  --------------------------------------------------------- */

  useEffect(() => {
    const handleNavigation = () => {
      const pageFromHash =
        window.location.hash.replace(
          "#",
          ""
        );

      const validPage = NAV.find(
        (item) =>
          item.toLowerCase() ===
          pageFromHash.toLowerCase()
      );

      setActivePage(
        validPage || "Home"
      );

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    };

    window.addEventListener(
      "popstate",
      handleNavigation
    );

    window.addEventListener(
      "hashchange",
      handleNavigation
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handleNavigation
      );

      window.removeEventListener(
        "hashchange",
        handleNavigation
      );
    };
  }, []);

  /* ---------------------------------------------------------
     PAGE CONTENT
  --------------------------------------------------------- */

  const renderPage = () => {
    switch (activePage) {
      case "About":
        return <AboutPage />;

      case "Resume":
        return <ResumePage />;

      case "Services":
        return <ServicesPage />;

      case "Portfolio":
        return <PortfolioPage />;

      case "Contact":
        return <ContactPage />;

      case "Home":
      default:
        return (
          <HomePage
            goToPage={goToPage}
          />
        );
    }
  };

  return (
    <div className="app">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="nav">
        <button
          type="button"
          className="logo logo-button"
          onClick={() =>
            goToPage("Home")
          }
        >
          Ashwini K V
        </button>

        <button
          type="button"
          className="burger"
          onClick={() =>
            setMenuOpen(
              (current) => !current
            )
          }
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <Icon
            type={
              menuOpen
                ? "close"
                : "menu"
            }
            size={27}
          />
        </button>

        <nav
          className={
            menuOpen
              ? "links show"
              : "links"
          }
        >
          {NAV.map((item) => (
            <button
              type="button"
              key={item}
              className={
                activePage === item
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() =>
                goToPage(item)
              }
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* =====================================================
          PAGE
      ===================================================== */}

      <main
        key={activePage}
        className="page-main"
      >
        {renderPage()}
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <p>
          You may view my portfolio and projects through the
          links attached below.
        </p>

        <Socials />

        <p className="footer-credit">
          Designed &amp; Developed by{" "}
          <b>Ashwini K V</b>
          {" · "}
          © {new Date().getFullYear()}
        </p>
      </footer>

      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <WhatsAppButton />
    </div>
  );
}