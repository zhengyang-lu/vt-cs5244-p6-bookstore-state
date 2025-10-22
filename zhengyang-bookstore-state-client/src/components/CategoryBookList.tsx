import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookListItem.tsx";
import { fetchBooksByCategoryName } from "../services.ts";
import { BookItem } from "../types.ts";

export default function CategoryBookList() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [bookList, setBookList] = useState<BookItem[]>([]);

  useEffect(() => {
    if (categoryName) {
      fetchBooksByCategoryName(categoryName)
        .then((books) => {
          setBookList(books);
        })
        .catch(console.error);
    }
  }, [categoryName]);

  const bookBoxList = bookList.map((myBook) => (
    <CategoryBookListItem key={myBook.bookId} book={myBook} />
  ));
  return <ul className="book-list">{bookBoxList}</ul>;
}