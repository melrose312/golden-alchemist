import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t: translate } = useTranslation();

  const testimonials = ["testimonial1", "testimonial2", "testimonial3"];

  return (
    <section id="testimonials" className="testimonials">
      <div className="row">
        <div data-aos="fade-up">
          <h2 className="section__title">{translate("testimonials.title")}</h2>
          <div className="section__divider"></div>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((key, index) => (
            <div
              className="testimonial-card"
              key={key}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="testimonial-card__avatar">
                {/* PLACEHOLDER: Replace with real avatar images */}
                <div className="placeholder-avatar">
                  {translate(`testimonials.${key}.name`).charAt(0)}
                </div>
              </div>
              <blockquote className="testimonial-card__quote">
                "{translate(`testimonials.${key}.quote`)}"
              </blockquote>
              <p className="testimonial-card__name">
                {translate(`testimonials.${key}.name`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
