import axios from "axios"

// Add config for axios (base url, proxy...) here
// More details on https://github.com/axios/axios#request-config
let backend = axios.create({
  baseURL: "https://api-v2-sg-staging.42race.com/api/v1/",
})

backend.interceptors.response.use(
  (response: any) => {
    return response.data
  },

  (error: any) => {
    return Promise.reject(error)
  },
)

export default backend
