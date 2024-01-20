import {useState} from "react";


import Style from './Search.module.css'
import axios from "axios";
import {Navigate} from "react-router-dom";

const Search = (props) => {
  const [username, setUsername] = useState('')
  const [search, setSearch] = useState('false')

  const handleChange = (e) =>{
    setUsername(e.target.value)
    setSearch('false')
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setSearch('true')
  }

  const resetForm = () => setUsername('')


  return (
    <div>
      <form className={Style.searchForm} onSubmit={handleSubmit}>
        <label htmlFor="Search">
          <input type="text" name='username' value={username} onChange={handleChange}/>
        </label>
        <label htmlFor="Button">
          <button type='submit'><img src="/icon/search.svg" alt=""/></button>
        </label>
      </form>
      {search === 'true'? <Navigate to={`user/${username}`}/>:''} {/*Redirect to user*/}
    </div>
  );
};

export default Search;