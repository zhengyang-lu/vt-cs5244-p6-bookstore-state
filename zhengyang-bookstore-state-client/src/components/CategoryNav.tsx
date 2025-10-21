import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";
import "./CategoryNav.css";
import { CategoryProps } from "../types.ts";

export default function CategoryNav(props: CategoryProps) {
  return (
    <div className="category-nav">
      <ul>
        <CategoryNavLinks categories={props.categories}/>
      </ul>
    </div>
  );
}
