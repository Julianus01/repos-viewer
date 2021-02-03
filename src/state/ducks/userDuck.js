import GithubApi from 'api/GithubApi'
import createReducer from '../utils/createReducer'

// Types
const TYPES = {
  GET_USER_PROFILE_AND_REPOS_REQUEST:
    '[user] GET_USER_PROFILE_AND_REPOS / REQUEST',
  GET_USER_PROFILE_AND_REPOS_SUCCESS:
    '[user] GET_USER_PROFILE_AND_REPOS / SUCCESS',
  GET_USER_PROFILE_AND_REPOS_ERROR: '[user] GET_USER_PROFILE_AND_REPOS / ERROR',

  GET_REPOS_REQUEST: '[user] GET_REPOS / REQUEST',
  GET_REPOS_SUCCESS: '[user] GET_REPOS / SUCCESS',
  GET_REPOS_ERROR: '[user] GET_REPOS / ERROR',

  GET_PROFILE_REQUEST: '[user] GET_PROFILE / REQUEST',
  GET_PROFILE_SUCCESS: '[user] GET_PROFILE / SUCCESS',
  GET_PROFILE_ERROR: '[user] GET_PROFILE / ERROR',
}

const initialState = {
  profile: null,
  repos: [],
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

  [TYPES.GET_REPOS_SUCCESS]: (state, { payload: { repos } }) => ({
    ...state,
    repos,
  }),

  [TYPES.GET_PROFILE_SUCCESS]: (state, { payload: { profile } }) => ({
    ...state,
    profile,
  }),

  RESET: () => initialState,
})

// Thunks
const thunks = {
  getUserProfileAndRepos: (username, page = 1) => async (dispatch) => {
    try {
      dispatch({ type: TYPES.GET_USER_PROFILE_AND_REPOS_REQUEST })

      const [profile, repos] = await Promise.all([
        GithubApi.getUserProfile(username),
        GithubApi.getReposForUser(username, page),
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

  getRepos: (username, page = 1) => async (dispatch) => {
    try {
      dispatch({ type: TYPES.GET_REPOS_REQUEST })
      const repos = await GithubApi.getReposForUser(username, page)

      dispatch({ type: TYPES.GET_REPOS_SUCCESS, payload: { repos } })
      return repos
    } catch (error) {
      dispatch({ type: TYPES.GET_REPOS_ERROR })
      throw error
    }
  },

  getProfile: (username) => async (dispatch) => {
    try {
      dispatch({ type: TYPES.GET_PROFILE_REQUEST })
      const profile = await GithubApi.getUserProfile(username)

      dispatch({ type: TYPES.GET_PROFILE_SUCCESS, payload: { profile } })
      return profile
    } catch (error) {
      dispatch({ type: TYPES.GET_PROFILE_ERROR })
      throw error
    }
  },
}

export { TYPES as userTypes }
export { thunks as userThunks }
export default reducer
