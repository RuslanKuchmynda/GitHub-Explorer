import Style from './Search.module.css'
const Search = (props) =>{
    return(
      <form className={Style.searchForm} action="">
        <label htmlFor="Search">
          <input type="text"/>
        </label>
      </form>
    );
};

export default Search;