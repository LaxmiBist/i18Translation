import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("home");

    return (
        <div style={{ width: "1050px" }}>
            <h1>{t("title")}</h1>
            <p>{t("des")}</p>
        </div>
    );
};

export default Home;
