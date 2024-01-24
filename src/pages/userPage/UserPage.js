import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";

import Style from './UserPage.module.css'
import Repository from "../../components/Repository/Repository";
import ErrorPage from "../errorPage/ErrorPage";

const UserPage = (props) => {
  const [userInfo, setUserInfo] = useState({}) // User State
  const [repository, setRepository] = useState([]) // Repository State

  const {username} = useParams() // Get username from url

  useEffect(() => {
    // Request for github api (User)
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        // console.log(response)
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
            const repositoryInfo = repoResponse.data.map(el => ({
              repoName: el.name,
              language: el.language,
              link: el.html_url,
              updated_at: el.updated_at,
            }))
            setRepository(repositoryInfo)
          })
          .catch(repoError => {
          });
      })
      .catch(error => {
        // console.log(error)
        alert('user is not found')
      })
  }, [username]);

  return (
    <div className={Style.user}>
      <section className={Style.userInfo}>
        <img src={userInfo.avatarUrl} alt=""/>
        <h3>{userInfo.username}</h3>
        <div>
          {userInfo.location != null ? `Location: ${userInfo.location}` : ''}
        </div>
        <div>
          {userInfo.created_at ? `Created account: ${userInfo.created_at.slice(0, 10)}` : ''}
        </div>
        <div>
          <a target="_blank" className={Style.userUrl} href={`${userInfo.userUrl}`}>Link account</a>
        </div>
      </section>
      <section className={Style.userRepositories}>
        <h2>Repositories</h2>
        {repository.map((item, index) => (
          <Repository
            key={index}
            repoName={item.repoName}
            language={item.language}
            link={item.link}
            updated_at={item.updated_at}
          />
        ))}
      </section>
    </div>
  );
};

export default UserPage