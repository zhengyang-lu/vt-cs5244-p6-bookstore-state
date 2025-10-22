// import types
// import { getBooksForCategory } from "../data";
import axios from "axios";
import { apiUrl } from "../utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookListItem.tsx";

export default function CategoryBookList() {
  const { categoryName } = useParams();

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
      axios.get(`${apiUrl}/categories/name/${categoryName}/books/`)
          .then((result) => setBookList(result.data))
          .catch(console.error);
  }, [categoryName]);
  

  const bookBoxList = bookList.map((myBook) => (
    <li>
      <CategoryBookListItem book={myBook} />
    </li>
  ));
  return <ul>{bookBoxList}</ul>;
}
