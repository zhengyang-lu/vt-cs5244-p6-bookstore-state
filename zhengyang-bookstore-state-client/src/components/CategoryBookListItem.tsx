import { BookItem } from "../types";
import { getSlug, bookImagePrefix } from "../utils";
import "./CategoryBookListItem.css";
import { Link } from "react-router-dom";
export default function CategoryBookListItem(props: { book: BookItem }) {
    const bookImageFileName = `${getSlug(props.book.title)}.png`;
    return (
        <li className="book-box">
            <div className="book-image">
                <Link to="#">
                    <img
                        src={`${bookImagePrefix}${bookImageFileName}`}
                        alt={props.book.title}
                    />
                </Link>
                {props.book.isPublic && (
                    <Link to="#" className="read-now-icon"><i className="icon-book"></i></Link>
                )}
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-author">{props.book.author}</div>
            <div className="book-price">${(props.book.price / 100).toFixed(2)}</div>
            <div className="book-buttons">
                <button className="button add-to-cart-button">
                    <i className="icon-shopping-cart"></i>
                    <span>Add to cart</span>
                </button>
            </div>
        </li>
    );
}
