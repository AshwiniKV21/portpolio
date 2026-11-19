import Icon from "../components/Icon";
import Socials from "../components/Socials";
import { RESUME_URL, HERO_BG_URL } from "../data/data";

export default function HomePage({ goToPage }) {
  return (
    <section
      className="page hero-bg"
      style={{ backgroundImage: `url(${HERO_BG_URL})` }}
    >
      <div className="hero-content page-content-animation">
        <p className="hello animate-item">Hello, I'm</p>

        <h1 className="animate-item">ASHWINI K V</h1>

        <p className="tagline animate-item">
          I'm a professional Full Stack
          Developer and AI/ML Engineer
        </p>

        <div className="btn-row animate-item">
          <button
            type="button"
            className="btn"
            onClick={() => goToPage("About")}
          >
            About Me
          </button>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Icon type="file" size={17} />
            Resume
          </a>
        </div>

        <div className="animate-item">
          <Socials />
        </div>
      </div>
    </section>
  );
}