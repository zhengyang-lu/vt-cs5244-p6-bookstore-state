import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";
import "./CategoryNav.css";

export default function CategoryNav() {
  return (
    <div className="category-nav">
      <ul>
        <CategoryNavLinks/>
      </ul>
    </div>
  );
}
