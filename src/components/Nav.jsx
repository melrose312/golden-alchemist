import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import NavLogo from "../assets/golden-alchemist.png";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { t: translate } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    if (!isHome) {
      window.location.href = "/#" + sectionId;
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav__container" id="nav">
      <div className="row nav__row">
        <div className="nav__logo">
          <Link to="/">
            <img src={NavLogo} className="nav__logo--image" alt="GAP Logo" />
          </Link>
        </div>
        <div className="nav__links">
          <ul>
            <li>
              <a
                href="#landing"
                className="nav__link"
                onClick={(event) => scrollToSection(event, "landing")}
              >
                {translate("nav.home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav__link"
                onClick={(event) => scrollToSection(event, "about")}
              >
                {translate("nav.about")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="nav__link"
                onClick={(event) => scrollToSection(event, "services")}
              >
                {translate("nav.services")}
              </a>
            </li>

            <li>
              <Link to="/contact" className="nav__link nav__link--contact">
                {translate("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__actions">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
