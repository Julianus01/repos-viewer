import hooks from 'hooks'
import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { useEffectOnce, useUpdateEffect } from 'react-use'
import { userThunks } from 'state/ducks/userDuck'
import styled from 'styled-components/macro'
import { Loader } from 'styles'
import { CONSTANTS } from 'utils/Constants'
import LoadingPage from './LoadingPage'
import UserNotFound from './user/UserNotFound'
import UserProfileDetails from './user/UserProfileDetails'
import UserReposList from './user/UserReposList'

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

  // Runs on first mount and fetches both
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

  // Runs only on updates, so it refetches profile only if username changes
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

  // Runs only on updates, so it refetches profile only if username or page changes
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

const UserPage = () => {
  const history = useHistory()
  const params = useParams()
  const {
    userData,
    profileLoading,
    reposLoading,
    notFound,
    numberOfPages,
    activePage,
  } = useData()

  const goToPage = useCallback(
    (page) => {
      history.replace(`/${params.username}?page=${page}`)
    },
    [params.username, history]
  )

  if (!activePage || activePage < 1) {
    return <Redirect to={`/${params.username}?page=1`} />
  }

  if (0 < numberOfPages && numberOfPages < activePage) {
    return <Redirect to={`/${params.username}?page=${numberOfPages}`} />
  }

  if (notFound) {
    return <UserNotFound username={params.username} />
  }

  if (profileLoading) {
    return <LoadingPage />
  }

  return (
    <Container>
      <Header>
        <UserProfileDetails profile={userData.profile} />
      </Header>

      {reposLoading ? (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      ) : (
        <UserReposList
          repos={userData.repos}
          activePage={activePage}
          numberOfPages={numberOfPages}
          goToPage={goToPage}
        />
      )}
    </Container>
  )
}

export default UserPage

const Container = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 5rem;
  padding-bottom: 20rem;
`

const Header = styled.header`
  margin-bottom: 10rem;
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
`
