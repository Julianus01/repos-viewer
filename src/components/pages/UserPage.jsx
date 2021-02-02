import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { userThunks } from 'state/ducks/userDuck'
import styled from 'styled-components/macro'
import { Loader } from 'styles'
import UserNotFound from './user/UserNotFound'

const UserPage = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  console.log(userData)

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true)
        await dispatch(userThunks.getUserProfileAndRepos(params.username))
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
    console.log('render loading')
    return (
      <LoadingContainer>
        <Loader />
      </LoadingContainer>
    )
  }

  console.log('render container')
  return <Container></Container>
}

export default UserPage

const Container = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
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
