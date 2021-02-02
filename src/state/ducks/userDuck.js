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
