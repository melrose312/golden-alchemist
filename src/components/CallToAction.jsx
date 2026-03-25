import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CallToAction() {
  const { t: translate } = useTranslation();

  return (
    <section className="cta">
      <div className="cta__overlay"></div>
      <div className="row cta__content" data-aos="fade-up">
        <h2 className="cta__title">{translate("cta.title")}</h2>
        <p className="cta__subtitle">{translate("cta.subtitle")}</p>
        <Link to="/contact" className="btn btn--primary btn--lg">
          {translate("cta.button")}
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
