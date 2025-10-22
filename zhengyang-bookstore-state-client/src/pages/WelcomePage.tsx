import { Link } from "react-router-dom";
import { heroImagePrefix } from "../utils";
import "./WelcomePage.css";
import { useCategoryContext } from '../contexts/CategoryContext';

export default function WelcomePage() {
  const { categories } = useCategoryContext();
  const firstCategory = categories[0];
  return (
    <div className="home-page">
      <section className="hero-section">
        <img
          className="hero-image"
          src={`${heroImagePrefix}hail-mary-hero-image.png`}
          alt="Hero Image"
        />
        <div className="hero-text">
          <p className="hero-text-title">Project Hail Mary</p>
          <p className="hero-text-author">by Andy Weir</p>
          <p className="hero-text-blurb">Now a major motion picture</p>
        </div>
        {firstCategory && (
          <Link to={`/category/${firstCategory.name}`}>
            <button className="button hero-button">SHOP NOW!</button>
          </Link>
        )}
      </section>
    </div>
  );
}