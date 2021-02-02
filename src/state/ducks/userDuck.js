import GithubApi from 'api/GithubApi'
import createReducer from '../utils/createReducer'

// Types
const TYPES = {
  GET_USER_PROFILE_AND_REPOS_REQUEST:
    '[user] GET_USER_PROFILE_AND_REPOS / REQUEST',
  GET_USER_PROFILE_AND_REPOS_SUCCESS:
    '[user] GET_USER_PROFILE_AND_REPOS / SUCCESS',
  GET_USER_PROFILE_AND_REPOS_ERROR: '[user] GET_USER_PROFILE_AND_REPOS / ERROR',
}

const initialState = {
  profile: {
    username: 'Julianus01',
    name: 'Iulian Crisan',
    publicReposCount: 14,
    avatarUrl: 'https://avatars.githubusercontent.com/u/32306531?v=4',
  },
  repos: [
    {
      id: 195519934,
      name: 'arctec-website',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 244679497,
      name: 'ios-movies-swift',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 133917763,
      name: 'Liscence',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 164116260,
      name: 'node-fb-login-manager',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 163509286,
      name: 'node-posts-server',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 221693923,
      name: 'photo-album',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 158931644,
      name: 'photo-manager',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 160692663,
      name: 'react-login-manager',
      forks_count: 0,
      stargazers_count: 1,
    },
    {
      id: 139596091,
      name: 'React-Slim-NOTES',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 164115923,
      name: 'redux-fb-login-manager',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 335349851,
      name: 'repos-viewer',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 133324552,
      name: 'rfb-users',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 189953047,
      name: 'scio-frontend',
      forks_count: 0,
      stargazers_count: 0,
    },
    {
      id: 260753560,
      name: 'Top3',
      forks_count: 0,
      stargazers_count: 0,
    },
  ],
}

// Reducer
const reducer = createReducer(initialState)({
  [TYPES.GET_USER_PROFILE_AND_REPOS_SUCCESS]: (
    state,
    { payload: { profile, repos } }
  ) => ({
    ...state,
    profile,
    repos,
  }),

  RESET: () => initialState,
})

// Thunks
const thunks = {
  getUserProfileAndRepos: (username) => async (dispatch) => {
    try {
      dispatch({ type: TYPES.GET_USER_PROFILE_AND_REPOS_REQUEST })

      const [profile, repos] = await Promise.all([
        GithubApi.getUserProfile(username),
        GithubApi.getReposForUser(username),
      ])

      dispatch({
        type: TYPES.GET_USER_PROFILE_AND_REPOS_SUCCESS,
        payload: { profile, repos },
      })

      return { profile, repos }
    } catch (error) {
      dispatch({ type: TYPES.GET_USER_PROFILE_AND_REPOS_ERROR })
      throw error
    }
  },
}

export { TYPES as userTypes }
export { thunks as userThunks }
export default reducer
