import axios from 'axios'

const getReposForUser = (username) => axios.get(`/users/${username}/repos`)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReposForUser,
}
