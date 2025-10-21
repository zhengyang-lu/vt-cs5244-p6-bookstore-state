import { Link } from "react-router-dom";
import { CategoryProps } from "../types";
import { heroImagePrefix } from "../utils";
import "./WelcomePage.css";

export default function WelcomePage(props: CategoryProps) {
  const firstCategory = props.categories[0];
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