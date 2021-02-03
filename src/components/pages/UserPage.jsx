import hooks from 'hooks'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { userThunks } from 'state/ducks/userDuck'
import styled from 'styled-components/macro'
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

  useEffect(() => {
    const getUserProfileAndRepos = async () => {
      try {
        setLoading(true)
        await dispatch(userThunks.getUserProfileAndRepos(params.username))

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
  }, [dispatch, params.username, isMounted])

  if (!page || !Number(page)) {
    history.replace(`/${params.username}?page=1`)
    return null
  }

  if (notFound) {
    return <UserNotFound username={params.username} />
  }

  if (loading) {
    return <LoadingPage />
  }

  return (
    <Container>
      <Header>
        <UserProfileDetails profile={userData.profile} />
      </Header>

      <UserReposList
        publicReposCount={userData.profile.publicReposCount}
        repos={userData.repos}
      />
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
