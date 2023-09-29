import { Link } from "react-router-dom";

function Header(prop) {
    return (
        <>
            <h1>{prop.name ? prop.name : ''} </h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;