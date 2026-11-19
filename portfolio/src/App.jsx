import { useEffect, useState } from "react";
import "./index.css";

import Icon from "./components/Icon";
import Socials from "./components/Socials";
import WhatsAppButton from "./components/WhatsAppButton";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

import { NAV } from "./data/data";

const pageFromHash = () => {
  const hash = window.location.hash.replace("#", "");
  const valid = NAV.find((item) => item.toLowerCase() === hash.toLowerCase());
  return valid || "Home";
};

export default function App() {
  const [activePage, setActivePage] = useState(pageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);

  const goToPage = (page) => {
    setActivePage(page);
    setMenuOpen(false);

    window.history.pushState({ page }, "", `#${page.toLowerCase()}`);

    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    const handleNavigation = () => {
      setActivePage(pageFromHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

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
        return <HomePage goToPage={goToPage} />;
    }
  };

  return (
    <div className="app">
      <header className="nav">
        <button
          type="button"
          className="logo logo-button"
          onClick={() => goToPage("Home")}
        >
          Ashwini K V
        </button>

        <button
          type="button"
          className="burger"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <Icon type={menuOpen ? "close" : "menu"} size={27} />
        </button>

        <nav className={menuOpen ? "links show" : "links"}>
          {NAV.map((item) => (
            <button
              type="button"
              key={item}
              className={activePage === item ? "nav-link active" : "nav-link"}
              onClick={() => goToPage(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main key={activePage} className="page-main">
        {renderPage()}
      </main>

      <footer className="footer">
        <p>
          You may view my portfolio and projects through the links attached
          below.
        </p>

        <Socials />

        <p className="footer-credit">
          Designed &amp; Developed by <b>Ashwini K V</b>
          {" · "}© {new Date().getFullYear()}
        </p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}