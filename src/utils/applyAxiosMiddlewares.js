import axios from 'axios'

const BASE_URL = 'https://api.github.com'

const applyBaseUrl = () => {
  axios.defaults.baseURL = BASE_URL
}

const applyErrorHandler = () => {
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const errorData = error?.response?.data

      if (errorData) {
        return Promise.reject(errorData)
      }

      return Promise.reject(error)
    }
  )
}

applyErrorHandler()
applyBaseUrl()
