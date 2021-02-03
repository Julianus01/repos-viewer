import hooks from 'hooks'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { userThunks } from 'state/ducks/userDuck'
import styled from 'styled-components/macro'
import { Loader } from 'styles'
import { CONSTANTS } from 'utils/Constants'
import LoadingPage from './LoadingPage'
import UserNotFound from './user/UserNotFound'
import UserProfileDetails from './user/UserProfileDetails'
import UserReposList from './user/UserReposList'

const UserPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isMounted = hooks.useMountedState()
  const userData = useSelector((state) => state.user)
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const { page } = hooks.useQueryParams()

  const numberOfPages = useMemo(
    () => Math.ceil(userData?.profile?.publicReposCount / CONSTANTS.PAGE_SIZE),
    [userData?.profile?.publicReposCount]
  )

  useEffect(() => {
    const getUserProfileAndRepos = async () => {
      try {
        setLoading(true)
        await dispatch(userThunks.getUserProfileAndRepos(params.username, page))

        if (isMounted()) {
          setLoading(false)
        }
      } catch (_) {
        if (isMounted()) {
          setNotFound(true)
        }
      }
    }

    getUserProfileAndRepos()
  }, [dispatch, params.username, page, isMounted])

  const goToPage = useCallback(
    (page) => {
      history.replace(`/${params.username}?page=${page}`)
    },
    [params.username, history]
  )

  if (!page || page < 1) {
    return <Redirect to={`/${params.username}?page=1`} />
  }

  if (page > numberOfPages) {
    return <Redirect to={`/${params.username}?page=${numberOfPages}`} />
  }

  if (notFound) {
    return <UserNotFound username={params.username} />
  }

  if (loading && !userData.profile) {
    return <LoadingPage />
  }

  return (
    <Container>
      <Header>
        <UserProfileDetails profile={userData.profile} />
      </Header>

      {loading ? (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      ) : (
        <UserReposList
          publicReposCount={userData.profile.publicReposCount}
          repos={userData.repos}
          activePage={page}
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
