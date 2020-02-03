import React, { useState, useEffect } from 'react';
import { fetchRepos } from './services/repos-api'
import axios from 'axios';

export default function ReposContainer (){
    const [repos, setRepos] = useState({
        repos: []
    });

    fetchRepos('gutovesco').then(res => {
        console.log(res.data)
    })
    return (
        <p>aqui</p>
    )
}