import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { userThunks } from 'state/ducks/userDuck'
import styled from 'styled-components/macro'
import { Loader } from 'styles'
import UserNotFound from './user/UserNotFound'
import UserProfileDetails from './user/UserProfileDetails'
import UserReposList from './user/UserReposList'

const UserPage = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const get = async () => {
      try {
        // setLoading(true)
        // await dispatch(userThunks.getUserProfileAndRepos(params.username))
        // setLoading(false)
      } catch (_) {
        setNotFound(true)
      }
    }

    get()
  }, [dispatch, params.username])

  if (notFound) {
    return <UserNotFound username={params.username} />
  }

  if (loading) {
    return (
      <LoadingContainer>
        <Loader />
      </LoadingContainer>
    )
  }

  return (
    <Container>
      <Header>
        <UserProfileDetails profile={userData.profile} />
      </Header>

      <UserReposList repos={userData.repos} />
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

const LoadingContainer = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
`

const Header = styled.header`
  margin-bottom: 10rem;
`
