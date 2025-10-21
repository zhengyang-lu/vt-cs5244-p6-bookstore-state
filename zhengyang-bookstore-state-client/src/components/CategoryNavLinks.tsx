import { NavLink } from "react-router-dom";
import { CategoryProps } from "../types";
export default function CategoryNavLinks(props: CategoryProps) {
  const categoryNavLinks = props.categories.map((category) => (
        <li key={category.categoryId}>
          <NavLink to={`/category/${category.name}`}>{category.name}</NavLink>
        </li>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
