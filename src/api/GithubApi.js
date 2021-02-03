import axios from 'axios'
import { CONSTANTS } from 'utils/Constants'

// SetTimeout promise resolver
const wait = async (time) => new Promise((resolve) => setTimeout(resolve, time))

// I've introduced this so loading screen can be visible and induce loading time
const apiCallWithFakeMinimumLoading = async (promise) => {
  const [response] = await Promise.all([promise, wait(1000)])
  return response
}

const getUserProfile = async (username) => {
  const profile = await apiCallWithFakeMinimumLoading(
    axios.get(`/users/${username}`)
  )

  return {
    username: profile.login,
    name: profile.name,
    htmlUrl: profile.html_url,
    publicReposCount: profile.public_repos,
    avatarUrl: profile.avatar_url,
  }
}

const getReposForUser = async (username, page = 1) => {
  const repos = await apiCallWithFakeMinimumLoading(
    axios.get(
      `/users/${username}/repos?per_page=${CONSTANTS.PAGE_SIZE}&page=${page}`
    )
  )

  return repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    forks_count: repo.forks_count,
    stargazers_count: repo.stargazers_count,
    htmlUrl: repo.html_url,
  }))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUserProfile,
  getReposForUser,
}
