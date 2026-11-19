import Icon from "../components/Icon";
import Socials from "../components/Socials";
import { CONTACT } from "../data/data";

export default function ContactPage() {
  return (
    <section className="page page-standard">
      <div className="page-container page-content-animation">
        <h2 className="page-title animate-item">Contact</h2>

        <p className="lead page-intro animate-item">
          Have a project in mind or want to collaborate? Feel free to reach
          out. I'm looking for Software / Full Stack Developer opportunities.
        </p>

        <div className="contact-wrapper animate-item">
          <div className="card contact-card">
            <div className="contact-row">
              <span className="ci">
                <Icon type="map" size={20} />
              </span>

              <div>
                <b>Address</b>
                <span>{CONTACT.address}</span>
              </div>
            </div>

            <div className="contact-row">
              <span className="ci">
                <Icon type="phone" size={20} />
              </span>

              <div>
                <b>Phone</b>
                <a href={CONTACT.phoneLink}>{CONTACT.phone}</a>
              </div>
            </div>

            <div className="contact-row">
              <span className="ci">
                <Icon type="mail" size={20} />
              </span>

              <div>
                <b>Email</b>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
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
                <Icon type="external" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}