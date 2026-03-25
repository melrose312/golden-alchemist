import { useTranslation } from "react-i18next";
import { FaBolt, FaSearchDollar, FaHandshake } from "react-icons/fa";

function Services() {
  const { t: translate } = useTranslation();

  const services = [
    {
      key: "service1",
      icon: <FaBolt />,
    },
    {
      key: "service2",
      icon: <FaSearchDollar />,
    },
    {
      key: "service3",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section id="services" className="services">
      <div className="row">
        <div data-aos="fade-up">
          <h2 className="section__title">{translate("services.title")}</h2>
          <div className="section__divider"></div>
          <h3 className="services__subtitle">{translate("services.subtitle")}</h3>
          <p className="services__description">{translate("services.description")}</p>
        </div>
        <div className="services__grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={service.key}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h4 className="service-card__title">
                {translate(`services.${service.key}.title`)}
              </h4>
              <p className="service-card__description">
                {translate(`services.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
