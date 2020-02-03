import { http } from './https'

export const fetchRepos = user => http.get(`users/${user}/repos`)