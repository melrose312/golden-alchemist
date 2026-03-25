import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <button
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <span className="lang-toggle__globe">🌐</span>
      <span className="lang-toggle__label">
        {i18n.language === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}

export default LanguageToggle;
