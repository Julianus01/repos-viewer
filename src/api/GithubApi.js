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
  // {
  //   id: 172581071,
  //   name: '.github',
  //   forks_count: 24,
  //   stargazers_count: 7,
  //   htmlUrl: 'https://github.com/facebook/.github',
  // },
  // {
  //   id: 169880381,
  //   name: 'Ax',
  //   forks_count: 141,
  //   stargazers_count: 1379,
  //   htmlUrl: 'https://github.com/facebook/Ax',
  // },
  // {
  //   id: 23674934,
  //   name: 'between-meals',
  //   forks_count: 44,
  //   stargazers_count: 48,
  //   htmlUrl: 'https://github.com/facebook/between-meals',
  // },
  // {
  //   id: 16303023,
  //   name: 'bistro',
  //   forks_count: 125,
  //   stargazers_count: 942,
  //   htmlUrl: 'https://github.com/facebook/bistro',
  // },
  // {
  //   id: 9504214,
  //   name: 'buck',
  //   forks_count: 1149,
  //   stargazers_count: 7731,
  //   htmlUrl: 'https://github.com/facebook/buck',
  // },
  // {
  //   id: 48260686,
  //   name: 'chef-cookbooks',
  //   forks_count: 111,
  //   stargazers_count: 489,
  //   htmlUrl: 'https://github.com/facebook/chef-cookbooks',
  // },
  // {
  //   id: 8322649,
  //   name: 'chef-utils',
  //   forks_count: 79,
  //   stargazers_count: 268,
  //   htmlUrl: 'https://github.com/facebook/chef-utils',
  // },
  // {
  //   id: 17065530,
  //   name: 'chisel',
  //   forks_count: 759,
  //   stargazers_count: 8452,
  //   htmlUrl: 'https://github.com/facebook/chisel',
  // },
  // {
  //   id: 165883,
  //   name: 'codemod',
  //   forks_count: 184,
  //   stargazers_count: 3720,
  //   htmlUrl: 'https://github.com/facebook/codemod',
  // },
  // {
  //   id: 32600951,
  //   name: 'componentkit',
  //   forks_count: 589,
  //   stargazers_count: 5476,
  //   htmlUrl: 'https://github.com/facebook/componentkit',
  // },
  // {
  //   id: 63537249,
  //   name: 'create-react-app',
  //   forks_count: 21094,
  //   stargazers_count: 85675,
  //   htmlUrl: 'https://github.com/facebook/create-react-app',
  // },
  // {
  //   id: 86859683,
  //   name: 'DelegatedRecoveryReferenceImplementation',
  //   forks_count: 43,
  //   stargazers_count: 24,
  //   htmlUrl:
  //     'https://github.com/facebook/DelegatedRecoveryReferenceImplementation',
  // },
  // {
  //   id: 94911145,
  //   name: 'docusaurus',
  //   forks_count: 2577,
  //   stargazers_count: 21521,
  //   htmlUrl: 'https://github.com/facebook/docusaurus',
  // },
  // {
  //   id: 52113921,
  //   name: 'draft-js',
  //   forks_count: 2287,
  //   stargazers_count: 19740,
  //   htmlUrl: 'https://github.com/facebook/draft-js',
  // },
  // {
  //   id: 83621289,
  //   name: 'duckling',
  //   forks_count: 597,
  //   stargazers_count: 3199,
  //   htmlUrl: 'https://github.com/facebook/duckling',
  // },
  // {
  //   id: 191655189,
  //   name: 'ent',
  //   forks_count: 318,
  //   stargazers_count: 6486,
  //   htmlUrl: 'https://github.com/facebook/ent',
  // },
  // {
  //   id: 659341,
  //   name: 'facebook-android-sdk',
  //   forks_count: 3399,
  //   stargazers_count: 5302,
  //   htmlUrl: 'https://github.com/facebook/facebook-android-sdk',
  // },
  // {
  //   id: 167639042,
  //   name: 'facebook-business-sdk-codegen',
  //   forks_count: 28,
  //   stargazers_count: 38,
  //   htmlUrl: 'https://github.com/facebook/facebook-business-sdk-codegen',
  // },
  // {
  //   id: 17075054,
  //   name: 'facebook-clang-plugins',
  //   forks_count: 87,
  //   stargazers_count: 470,
  //   htmlUrl: 'https://github.com/facebook/facebook-clang-plugins',
  // },
  // {
  //   id: 53990455,
  //   name: 'facebook-instant-articles-sdk-php',
  //   forks_count: 130,
  //   stargazers_count: 214,
  //   htmlUrl: 'https://github.com/facebook/facebook-instant-articles-sdk-php',
  // },
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

const wait = async (time) => new Promise((resolve) => setTimeout(resolve, time))

// I've introduced this so loading screen can be visible and induce loading time
const apiCallWithFakeMinimumLoading = async (promise) => {
  const [response] = await Promise.all([promise, wait(1000)])
  return response
}

const getUserProfile = async (username) => {
  await apiCallWithFakeMinimumLoading(wait(100))
  return PROFILE
  // const profile = await apiCallWithFakeMinimumLoading(
  //   axios.get(`/users/${username}`)
  // )

  // return {
  //   username: profile.login,
  //   name: profile.name,
  //   htmlUrl: profile.html_url,
  //   publicReposCount: profile.public_repos,
  //   avatarUrl: profile.avatar_url,
  // }
}

const getReposForUser = async (username, page = 1) => {
  await apiCallWithFakeMinimumLoading(wait(100))
  return REPOS
  // const repos = await apiCallWithFakeMinimumLoading(
  //   axios.get(
  //     `/users/${username}/repos?per_page=${CONSTANTS.PAGE_SIZE}&page=${page}`
  //   )
  // )

  // return repos.map((repo) => ({
  //   id: repo.id,
  //   name: repo.name,
  //   forks_count: repo.forks_count,
  //   stargazers_count: repo.stargazers_count,
  //   htmlUrl: repo.html_url,
  // }))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUserProfile,
  getReposForUser,
}
