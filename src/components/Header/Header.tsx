import style from "./style.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={style.headerContainer}>
      <Link to={"/home"}>
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <input placeholder="Search character" name="search" />
        </li>
      </ul>
    </div>
  );
}
