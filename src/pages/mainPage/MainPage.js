import Search from "../../components/Search/Search";
import Style from './MainPage.module.css'

const MainPage = (props) =>{
    return(
    <div className = {Style.main}>
      <div className={Style.mainSearch}>
        <h2>Search User</h2>
        <Search/>
      </div>
    </div>
    );
};

export default MainPage