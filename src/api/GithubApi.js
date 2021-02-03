import axios from 'axios'
import { CONSTANTS } from 'utils/Constants'

const PROFILE = {
  username: 'facebook',
  name: 'Facebook',
  htmlUrl: 'https://github.com/facebook',
  publicReposCount: 118,
  avatarUrl: 'https://avatars.githubusercontent.com/u/69631?v=4',
}

const REPOS = [
  {
    id: 738491,
    name: 'facebook-ios-sdk',
    forks_count: 2751,
    stargazers_count: 6637,
    htmlUrl: 'https://github.com/facebook/facebook-ios-sdk',
  },
  {
    id: 47210240,
    name: 'facebook-java-business-sdk',
    forks_count: 240,
    stargazers_count: 272,
    htmlUrl: 'https://github.com/facebook/facebook-java-business-sdk',
  },
  {
    id: 101788376,
    name: 'facebook-nodejs-business-sdk',
    forks_count: 124,
    stargazers_count: 311,
    htmlUrl: 'https://github.com/facebook/facebook-nodejs-business-sdk',
  },
  {
    id: 20878334,
    name: 'facebook-php-business-sdk',
    forks_count: 383,
    stargazers_count: 557,
    htmlUrl: 'https://github.com/facebook/facebook-php-business-sdk',
  },
  {
    id: 23458977,
    name: 'facebook-python-business-sdk',
    forks_count: 513,
    stargazers_count: 834,
    htmlUrl: 'https://github.com/facebook/facebook-python-business-sdk',
  },
  {
    id: 31289373,
    name: 'facebook-ruby-business-sdk',
    forks_count: 91,
    stargazers_count: 143,
    htmlUrl: 'https://github.com/facebook/facebook-ruby-business-sdk',
  },
  {
    id: 41766017,
    name: 'facebook-sdk-for-unity',
    forks_count: 206,
    stargazers_count: 314,
    htmlUrl: 'https://github.com/facebook/facebook-sdk-for-unity',
  },
  {
    id: 204788647,
    name: 'facebook360_dep',
    forks_count: 30,
    stargazers_count: 187,
    htmlUrl: 'https://github.com/facebook/facebook360_dep',
  },
  {
    id: 111588048,
    name: 'FAI-PEP',
    forks_count: 69,
    stargazers_count: 322,
    htmlUrl: 'https://github.com/facebook/FAI-PEP',
  },
  {
    id: 23821422,
    name: 'fatal',
    forks_count: 138,
    stargazers_count: 912,
    htmlUrl: 'https://github.com/facebook/fatal',
  },
]

// SetTimeout promise resolver
const wait = async (time) => new Promise((resolve) => setTimeout(resolve, time))

// I've introduced this so loading screen can be visible and induce loading time
const apiCallWithFakeMinimumLoading = async (promise) => {
  const [response] = await Promise.all([promise, wait(1000)])
  return response
}

const getUserProfile = async (username) => {
  // await apiCallWithFakeMinimumLoading(wait(100))
  // return PROFILE
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
  // await apiCallWithFakeMinimumLoading(wait(100))
  // return REPOS
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
