import React from 'react'
import styled from 'styled-components/macro'
import { Loader } from 'styles'

const LoadingPage = () => {
  return (
    <Container>
      <Loader />
    </Container>
  )
}

export default LoadingPage

const Container = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
`
