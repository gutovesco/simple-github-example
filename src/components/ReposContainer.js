import React, { useState, useEffect } from 'react';
import { fetchRepos } from './services/repos-api'

export default function ReposContainer (){
    const [repos,setRepos] = useState({
        repos: [],
        username: ''
    });

    useEffect(() => {
        fetchRepos('gutovesco').then(res => {
            setRepos({repos: res.data})
            console.log(res.data)
        })
    }, [])

    const handleChange = (e) => {
        let username = e.target.value;

        setRepos(prevState => {
          return { ...prevState, username: username }
        });
      }

    return (
        <>
        <h1>Repos</h1>
        <form action="#">
            <input 
            onChange={handleChange}
            placeholder="Informe o nome de usuario no github" 
            type="search"
            style={{width: '250px'}}
            ></input>
        </form>
        <ul>
            {repos.repos.map(repo => (
                 <li key={repo.id}>{repo.name}</li>
            ) )}
        </ul>
    )
}
        </>
    )
}