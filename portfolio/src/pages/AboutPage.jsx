import { CONTACT, SKILLS } from "../data/data";

export default function AboutPage() {
  return (
    <section className="page page-standard">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">About Me</h2>

        <p className="lead animate-item">
          Aspiring Software Developer with hands-on experience in Python,
          Django, SQL, HTML, CSS and JavaScript through a full-stack
          development internship and academic projects. I have a strong
          understanding of Object-Oriented Programming, database concepts, web
          development and problem-solving, and I enjoy building responsive web
          applications with both frontend and backend functionality. I'm a
          quick learner, eager to pick up new technologies and contribute to
          software development teams.
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
            <span>MCA</span>
          </div>
        </div>

        <h3 className="center animate-item">Skills</h3>

        <div className="skill-groups">
          {SKILLS.map((group, index) => (
            <div
              key={group.group}
              className="card animate-item"
              style={{ animationDelay: `${0.35 + index * 0.08}s` }}
            >
              <h4>{group.group}</h4>

              <div className="tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">
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