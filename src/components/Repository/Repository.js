import Style from './Repository.module.css'
const Repository = (props) =>{
    return(
    <div className = {Style.repository}>
      <div className={Style.repository_info}>
        <h3>{props.repoName}</h3>
        <p>Language: {props.language}</p>
        <p>{props.updated_at ? `Last updated:  ${props.updated_at.slice(0, 10)}` : ''}</p>
      </div>
      <div className={Style.repository_link}>
        <a target="_blank" href={`${props.link}`}>Link repository</a>
      </div>
    </div>
    );
};

export default Repository