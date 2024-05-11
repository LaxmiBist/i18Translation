import { useTranslation } from "react-i18next";

type Language = {
    code: string;
    lang: string;
};

const language: Language[] = [
    { code: "en", lang: "En" },
    { code: "np", lang: "Np" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    console.log("printing content of i18n", i18n);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="button">
            {language.map((lng) => (
                <button
                    style={{
                        borderRadius: "20%",
                        marginRight: "0.5rem",
                    }}
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                >
                    {lng.lang}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
