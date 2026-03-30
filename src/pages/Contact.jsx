import { useTranslation } from "react-i18next";
import { useState } from "react";

function Contact() {
  const { t: translate } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Connect to backend or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <div className="row contact-page__row">
        <div className="contact-page__info">
          <h1 className="section__title">{translate("contact.title")}</h1>
          <div className="section__divider"></div>
          <p className="contact-page__subtitle">{translate("contact.subtitle")}</p>

          <div className="contact-page__details">

            <div className="contact-detail">
              <span className="contact-detail__icon">✉️</span>
              <div>
                <h4 className="contact-detail__label">
                  {translate("contact.info.email")}
                </h4>
                <p className="contact-detail__value">
                  {translate("Complete the Form Below to Send us a Message")}
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon">📞</span>
              <div>
                <h4 className="contact-detail__label">
                  {translate("contact.info.phone")}
                </h4>
                <p className="contact-detail__value">
                  {translate("+1 (702) 527-4737")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-page__form-wrapper">
          {submitted ? (
            <div className="contact-page__success">
              <span className="contact-page__success-icon">✓</span>
              <p>
                {translate("contact.form.name") === "Nombre completo"
                  ? "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
                  : "Message sent successfully! We'll be in touch soon."}
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{translate("contact.form.name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={translate("contact.form.name")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{translate("contact.form.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={translate("contact.form.email")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{translate("contact.form.phone")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={translate("contact.form.phone")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{translate("contact.form.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={translate("contact.form.message")}
                ></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                {translate("contact.form.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default Contact;
