import React, {useState, useEffect} from 'react'
const url = 'https://api.github.com/users';
const UseEffectFetchData = () => {
    const [user, setUser] = useState([]);
    const getUser = async () => {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user)
        console.log(user)
    }
    useEffect(() => {
        getUser();
    }, [])
  return (
    <div>
        {user.map((user, id) => {
            return(
                <div key={id}>
                    <img src={user.avatar_url} alt={user.login} />
                    <h2>{user.login}</h2>
                </div>
            );
            
        })}
    </div>
  )
}

export default UseEffectFetchData