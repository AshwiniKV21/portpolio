import Icon from "../components/Icon";
import { CERTS, RESUME_URL } from "../data/data";

export default function ResumePage() {
  return (
    <section className="page page-standard page-alt">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">Resume</h2>

        <div className="two-col">
          <div className="animate-item">
            <h3>Experience</h3>

            <div className="timeline">
              <div className="item">
                <span className="date">Mar 2026 – May 2026</span>

                <h4>Full Stack Development Intern – DecodeLabs</h4>

                <ul>
                  <li>
                    Gained practical experience in full-stack web development
                    using HTML, CSS, JavaScript, Python and SQL.
                  </li>

                  <li>
                    Developed an understanding of frontend-backend integration,
                    database management and responsive web application
                    development.
                  </li>

                  <li>
                    Participated in application development, testing and
                    debugging to identify and resolve technical issues.
                  </li>

                  <li>
                    Strengthened problem-solving and technical skills through
                    hands-on development and version control using Git and
                    GitHub.
                  </li>
                </ul>
              </div>
            </div>

            <h3>Certifications</h3>

            <div className="timeline">
              {CERTS.map((certification) => (
                <div className="item" key={certification}>
                  <h4>{certification}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-item">
            <h3>Education</h3>

            <div className="timeline">
              <div className="item">
                <span className="date">2025 – 2027</span>

                <h4>Master of Computer Applications (MCA)</h4>

                <p>
                  <i>Seshadripuram College, Bangalore</i>
                </p>

                <p>
                  Focused on advanced computer applications including software
                  development, database management and web technologies.
                </p>
              </div>

              <div className="item">
                <span className="date">2022 – 2025</span>

                <h4>Bachelor of Computer Applications (BCA)</h4>

                <p>
                  <i>Maharani Lakshmi Ammanni College for Women, Bangalore</i>
                </p>

                <p>
                  Studied programming, database systems, web development and
                  software engineering.
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
                <Icon type="file" size={17} />
                View Resume
              </a>

              <a
                href={RESUME_URL}
                download="Ashwini_K_V_resume.pdf"
                className="btn"
              >
                <Icon type="download" size={17} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}