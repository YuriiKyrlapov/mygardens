import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./../styles/Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>{t("welcome")}</h1>
          <p>🌿 Professional gardening services for your beautiful home</p>
          <Link to="/booking">
            <button className="btn-primary">{t("book_service")}</button>
          </Link>
        </div>
        <img src="/src/assets/hero.jpg" alt="Gardener" className="hero-image" />
      </header>

      {/* Services Section */}
      <section className="services">
        <h2>{t("services")}</h2>
        <div className="service-list">
          <div className="service-card">
            <img src="/src/assets/lawn.jpg" alt="Lawn Care" />
            <h3>{t("service_list.lawn_care")}</h3>
          </div>
          <div className="service-card">
            <img src="/src/assets/tree.jpg" alt="Tree Trimming" />
            <h3>{t("service_list.tree_trimming")}</h3>
          </div>
          <div className="service-card">
            <img src="/src/assets/planting.jpg" alt="Planting" />
            <h3>{t("service_list.planting")}</h3>
          </div>
          <div className="service-card">
            <img src="/src/assets/landscape.jpg" alt="Landscape Design" />
            <h3>{t("service_list.landscape_design")}</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact">
        <h2>{t("contact_us")}</h2>
        <p>📞 +49 123 456 7890</p>
        <p>📧 gardener@example.com</p>
        <div className="social-links">
          <a href="https://telegram.me/yourtelegram" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
