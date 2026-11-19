import ProjectGrid from "../components/ProjectGrid";

export default function PortfolioPage() {
  return (
    <section className="page page-standard page-alt">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">Portfolio</h2>

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