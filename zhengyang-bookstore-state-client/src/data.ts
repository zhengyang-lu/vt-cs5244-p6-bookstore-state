import { BookItem, CategoryItem } from "./types";
import sourceData from "./db.json";

export function getCategories(): CategoryItem[] {
  return sourceData.categories as CategoryItem[];
}

export function getBooksForCategory(categoryName: string): BookItem[] {

  const selectedCategory: CategoryItem = sourceData.categories.find(
    (category: CategoryItem) => category.name === categoryName
  ) as CategoryItem;

  const fullBookList: BookItem[] = sourceData.books;


  const filteredBookList = fullBookList.filter(
    (book) => book.categoryId === selectedCategory.categoryId
  );

  return filteredBookList;
}
