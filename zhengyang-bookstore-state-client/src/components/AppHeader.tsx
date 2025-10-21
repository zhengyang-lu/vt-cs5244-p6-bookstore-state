import HeaderDropdown from "./HeaderDropdown";
import { Link } from "react-router-dom";
import "./AppHeader.css";
import { siteImagePrefix } from "../utils";
import { CategoryProps } from "../types";
export default function AppHeader(props: CategoryProps) {
  return (
    <header className="container">
      <section className="bookstore-logo-and-name">
          <Link to="/">
              <img
                  src={`${siteImagePrefix}finch-logo.png`}
                  alt="Finch & Fable logo"
                  width="100px"
                  height="auto"
              />
          </Link>
          <Link to="/">
              <span className="text-logo">Finch&Fable</span>
          </Link>
      </section>
      <section className="search-bar-and-button">
          <form action={`${import.meta.env.BASE_URL}`} className="search-form">
              <input type="text" className="search-bar" placeholder="Search..."/>
              <button type="submit" className="button search-button">
                  <i className="icon-search"></i>
              </button>
          </form>
      </section>
      <section className="header-dropdown-and-cart">
          <HeaderDropdown categories={props.categories}/>
          <button className="button cart-button">
              <i className="icon-shopping-cart"></i>
              <span className="cart-item-count">0</span>
          </button>
          <button className="button login-button">
              <i className="icon-user"></i>
          </button>
      </section>
    </header>
  );
}
