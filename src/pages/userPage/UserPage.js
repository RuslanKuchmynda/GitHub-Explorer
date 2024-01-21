import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Style from './UserPage.module.css'
import Repository from "../../components/Repository/Repository";

const UserPage = (props) =>{
  const [userInfo, setUserInfo] = useState({}) // User State
  const [repository, setRepository] = useState({}) // Repository State

  const {username} = useParams() // Get username from url

  useEffect(() => {
    // Request for github api (User)
    axios.get(`https://api.github.com/users/${username}`)
      .then(response =>{
        console.log(response)
        const user = {
          avatarUrl: response.data.avatar_url,
          username: response.data.name,
          userUrl: response.data.html_url,
          location: response.data.location,
          created_at: response.data.created_at,
          repository_url: response.data.repos_url,
        }
        setUserInfo(user)

        // Request for github api (User repository)
        axios.get(`${user.repository_url}`)
          .then(repoResponse => {
            console.log(repoResponse);
            const repositoryInfo = {
              repoName: repoResponse.data.name,
              language: repoResponse.data.language,
              link: repoResponse.data.url
            }
            setRepository(repositoryInfo)
          })
          .catch(repoError => {
            console.log(repoError);
          });
      })
      .catch(error =>{
        console.log(error)
      })


  }, [username]);

    return(
    <div className = {Style.user}>
      <section className={Style.userInfo}>
        <img src={userInfo.avatarUrl} alt=""/>
       <h3>{userInfo.username}</h3>
        <div>
          {userInfo.location != null ? `Location: ${userInfo.location}` : ''}
        </div>
        <div>
          {userInfo.created_at ? `Created account: ${userInfo.created_at.slice(0,10)}` : ''}
        </div>
        <div>
          <a className={Style.userUrl} href={`${userInfo.userUrl}`}>Link account</a>
        </div>
      </section>
      <section className={Style.userRepositories}>
        <h2>Repositories</h2>
        <Repository/>
        <Repository/>
      </section>
    </div>
    );
};

export default UserPage