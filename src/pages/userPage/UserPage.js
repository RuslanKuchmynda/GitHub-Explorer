import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


const UserPage = (props) =>{
  const [userInfo, setUserInfo] = useState({})

  const {username} = useParams()

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(response =>{
        console.log(response)
        setUserInfo({
          avatarUrl: response.data.avatar_url,
        })
      })
      .catch(error =>{
        console.log(error)
      })
  }, [username]);

    return(
    <div className = "">
      <img src={`${userInfo ? userInfo.avatarUrl : ''}`} alt=""/>
    </div>
    );
};

export default UserPage