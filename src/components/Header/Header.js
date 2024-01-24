import Search from "../Search/Search";

import Style from "./Header.module.css"
import {Link} from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <Link className={Style.logoLink} to={'/'}>
        <div className={Style.logo}>
          <img src="/icon/logo.svg" alt="logo"/>
          <h1>GitHub Explorer</h1>
        </div>
      </Link>
      <Search/>
    </header>
  );
};

export default Header;