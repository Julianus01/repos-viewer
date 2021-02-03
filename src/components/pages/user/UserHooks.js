import hooks from 'hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffectOnce, useUpdateEffect } from 'react-use'
import { userThunks } from 'state/ducks/userDuck'
import { CONSTANTS } from 'utils/Constants'

const useData = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)
  const params = useParams()
  const [profileLoading, setProfileLoading] = useState(true)
  const [reposLoading, setReposLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const { page } = hooks.useQueryParams()

  const numberOfPages = useMemo(
    () => Math.ceil(userData?.profile?.publicReposCount / CONSTANTS.PAGE_SIZE),
    [userData?.profile?.publicReposCount]
  )

  // Runs on first mount and fetches both profile and repos
  useEffectOnce(() => {
    const getUserProfileAndRepos = async () => {
      try {
        setProfileLoading(true)
        setReposLoading(true)
        await dispatch(userThunks.getUserProfileAndRepos(params.username, page))

        setProfileLoading(false)
        setReposLoading(false)
      } catch (_) {
        setNotFound(true)
      }
    }

    getUserProfileAndRepos()
  })

  // Runs only on updates, so it refetches PROFILE only if username changes
  useUpdateEffect(() => {
    const getProfile = async () => {
      try {
        setProfileLoading(true)
        await dispatch(userThunks.getProfile(params.username))
        setProfileLoading(false)
      } catch (error) {
        setNotFound(true)
      }
    }

    getProfile()
  }, [dispatch, params.username])

  // Runs only on updates, so it refetches REPOS only if username or page changes
  useUpdateEffect(() => {
    const getRepos = async () => {
      setReposLoading(true)
      await dispatch(userThunks.getRepos(params.username, page))
      setReposLoading(false)
    }

    getRepos()
  }, [dispatch, page, params.username])

  return {
    userData,
    profileLoading,
    reposLoading,
    notFound,
    numberOfPages,
    activePage: page,
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useData,
}
