import Search from "../Search/Search";

import Style from "./Header.module.css"
const Header = (props) => {
  return (
    <header>
      <div className={Style.logo}>
        <img src="/icon/logo.svg" alt="logo"/>
        <h1>GitHub Explorer</h1>
      </div>
      <Search/>
    </header>
  );
};

export default Header;