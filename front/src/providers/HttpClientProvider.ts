import axios, { Axios } from 'axios'

const http: Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL
})

export { http }