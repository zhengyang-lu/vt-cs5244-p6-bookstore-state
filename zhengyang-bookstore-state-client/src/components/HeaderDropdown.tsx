import { CategoryProps } from "../types.ts";
import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";
export default function HeaderDropdown(props: CategoryProps) {
  return (
    <div className="header-dropdown">
      <button className="button categories-button">
          <span className="categories-button-text">Categories</span><span className="down-arrow">▼</span>
      </button>
        <CategoryNavLinks categories={props.categories}/>
    </div>
)
    ;
}
