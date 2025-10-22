import "./AppFooter.css";
import { Link } from "react-router-dom";
export default function AppFooter() {
    return (
        <footer className="container">
            <div className="footer-content">
                <section className="links">
                    <Link to="/">About</Link>
                    <Link to="/">Contact us</Link>
                    <Link to="/">Find us</Link>
                </section>
                <section className="social-media-icons">
                    <Link to="/"><i className="icon-facebook"></i></Link>
                    <Link to="/"><i className="icon-twitter"></i></Link>
                    <Link to="/"><i className="icon-instagram"></i></Link>
                </section>
            </div>
            <section className="copyright">
                <p>© 2025 Finch and Fable, Inc.</p>
            </section>
        </footer>
    );
}
