import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterLogo from "../assets/logonormal.png";

function Footer() {
  const { t: translate } = useTranslation();

  return (
    <footer className="footer">
      <div className="row footer__row">
        <div className="footer__brand">
          <img
            src={FooterLogo}
            alt="Golden Alchemist Prime Logo"
            className="footer__logo-img"
          />
          <p className="footer__tagline">Golden Alchemist Prime</p>
        </div>
        <div className="footer__links">
          <h4 className="footer__heading">{translate("footer.quickLinks")}</h4>
          <ul>
            <li>
              <a href="#about" className="footer__link">
                {translate("nav.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                {translate("nav.services")}
              </a>
            </li>

            <li>
              <Link to="/contact" className="footer__link">
                {translate("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h4 className="footer__heading">{translate("footer.followUs")}</h4>
          <div className="footer__social-icons">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Golden Alchemist Prime.{" "}
          {translate("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
