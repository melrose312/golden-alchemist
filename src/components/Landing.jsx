import { useTranslation } from "react-i18next";

function Landing() {
  const { t: translate } = useTranslation();

  return (
    <section id="landing" className="landing">
      <div className="landing__overlay"></div>
      <div className="landing__content" data-aos="fade-up" data-aos-delay="200">
        <h1 className="landing__headline">{translate("landing.headline")}</h1>
        <p className="landing__subtitle">{translate("landing.subtitle")}</p>
        <a href="#about" className="btn btn--primary">
          {translate("landing.cta")}
        </a>
      </div>
      {/* ADD BACKGROUND IMAGE HERE */}
    </section>
  );
}

export default Landing;
