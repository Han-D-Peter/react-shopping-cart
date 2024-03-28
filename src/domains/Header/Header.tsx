import { Link } from "@tanstack/react-router";
import { headerStyle } from "./Header.css";

export default function Header() {
  return (
    <header className={headerStyle()}>
      <Link to="/shops">NEXTSTEP</Link>
      <div>
        <ul>
          <li>
            <Link to="/carts">장바구니</Link>
          </li>
          <li>
            <Link to="/myorders">주문목록</Link>
          </li>
        </ul>
      </div>
    </header>
  );
  return (
    <div>
      <Link to="/shops">Home</Link> <Link to="/carts">About</Link>{" "}
      <Link to="/myorders">detail</Link>
    </div>
  );
}
