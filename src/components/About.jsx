import { useTranslation } from "react-i18next";
import RealEstateImg from "../assets/real-estate-key.jpg";

function About() {
  const { t: translate } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="row about__row">
        <div className="about__text" data-aos="fade-right">
          <h2 className="section__title">{translate("about.title")}</h2>
          <div className="section__divider"></div>
          <h3 className="about__subtitle">{translate("about.subtitle")}</h3>
          <p className="about__paragraph">{translate("about.paragraph1")}</p>
          <p className="about__paragraph">{translate("about.paragraph2")}</p>
          <p className="about__paragraph">{translate("about.paragraph3")}</p>
          <p className="about__highlight">{translate("about.highlight")}</p>
        </div>
        <div className="about__image" data-aos="fade-left" data-aos-delay="200">
          <img className="" src={RealEstateImg} alt="real-estate-contract" />
        </div>
      </div>
    </section>
  );
}

export default About;
