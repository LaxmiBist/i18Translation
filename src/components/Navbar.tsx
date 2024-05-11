import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation("nav");

    return (
        <div style={{ display: "flex", gap: "3rem", marginBottom: "2rem" }}>
            <p>{t("home")}</p>
            <p>{t("about")}</p>
            <p>{t("contact")}</p>
            <LanguageSelector />
        </div>
    );
};

export default Navbar;
