import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";
export default function HeaderDropdown() {
  return (
    <div className="header-dropdown">
      <button className="button categories-button">
          <span className="categories-button-text">Categories</span><span className="down-arrow">▼</span>
      </button>
        <CategoryNavLinks/>
    </div>
)
    ;
}
