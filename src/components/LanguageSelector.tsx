import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const nextLanguage = currentLanguage === "en" ? "np" : "en";
        i18n.changeLanguage(nextLanguage);
    };

    return (
        <div className="switch-button">
            <input
                className="switch-button-checkbox"
                type="checkbox"
                onClick={toggleLanguage}
            />
            <label className="switch-button-label" htmlFor="">
                <span className="switch-button-label-span">नेपाली</span>
            </label>
        </div>
    );
};

export default LanguageSelector;
