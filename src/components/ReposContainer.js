import React, { useState, useEffect } from 'react';
import { fetchRepos } from './services/repos-api'
import axios from 'axios';

export default function ReposContainer (){
    const [repos,setRepos] = useState({});

    useEffect(() => {
        fetchRepos('gutovesco').then(res => {
            setRepos({repos: res.data})
            console.log(res.data)
        })
    }, [])

    return (
        <>
        <ul>
            {() => repos.map(repo => (
                 <li key={repo.id}>{repo.name}</li>
            ) )}
        </ul>
        </>
    )
}