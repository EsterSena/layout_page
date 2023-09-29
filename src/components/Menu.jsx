import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/form">Formulário</Link></li>
        </ul>

      </nav>
    </>
  );
}

export default Menu;