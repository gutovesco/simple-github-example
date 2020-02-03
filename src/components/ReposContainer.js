import React, { useState, useEffect } from 'react';
import { fetchRepos } from './services/repos-api'


export default function ReposContainer (){
    const [repos,setRepos] = useState({
        repos: []
    });

    useEffect(() => {
        fetchRepos('gutovesco').then(res => {
            setRepos(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <>
        <ul>
            {() => setRepos.map(repo => (
                 <li key={repo.id}>{repo.name}</li>
            ) )}
        </ul>
        </>
    )
}