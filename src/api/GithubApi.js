import axios from 'axios'

const getReposForUser = async (username) => {
  const repos = await axios.get(`/users/${username}/repos`)

  return repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    forks_count: repo.forks_count,
    stargazers_count: repo.stargazers_count,
  }))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReposForUser,
}
