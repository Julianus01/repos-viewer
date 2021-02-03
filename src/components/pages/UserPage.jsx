import React, { useCallback } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Loader } from 'styles'
import LoadingPage from './LoadingPage'
import UserHooks from './user/UserHooks'
import UserNotFound from './user/UserNotFound'
import UserProfileDetails from './user/UserProfileDetails'
import UserReposList from './user/UserReposList'

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
  } = UserHooks.useData()

  const goToPage = useCallback(
    (page) => {
      history.replace(`/${params.username}?page=${page}`)
    },
    [params.username, history]
  )

  // Redirect if negativ or undefined query parameter
  if (!activePage || activePage < 1) {
    return <Redirect to={`/${params.username}?page=1`} />
  }

  // Redirect if query parameter number is higher than actual pages count
  if (0 < numberOfPages && numberOfPages < activePage) {
    return <Redirect to={`/${params.username}?page=${numberOfPages}`} />
  }

  // Render not found in case of not found error
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
