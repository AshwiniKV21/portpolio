import Icon from "../components/Icon";
import { SERVICES } from "../data/data";

export default function ServicesPage() {
  return (
    <section className="page page-standard">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">Services</h2>

        <p className="lead page-intro animate-item">
          Technologies and development areas I work with.
        </p>

        <div className="service-grid">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="card service animate-item"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <div className="icon">
                <Icon type={service.icon} size={30} />
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