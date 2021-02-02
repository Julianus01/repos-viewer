import React from 'react'
import styled from 'styled-components/macro'

const Repo = ({ index, repo }) => {
  return (
    <RepoContainer>
      <RepoName>
        {index + 1} {repo.name}
      </RepoName>
    </RepoContainer>
  )
}

const RepoContainer = styled.div`
  padding: 2rem 3rem;
  background: #f8f8f8;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.light};
    background: ${({ theme }) => theme.color.background.base};
    border-color: ${({ theme }) => theme.color.border};
  }
`

const RepoName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.color.text.body};
`

const UserReposList = ({ repos }) => {
  return (
    <Container>
      <Title>Repos</Title>
      {repos.map((repo, index) => (
        <Repo key={repo.id} index={index} repo={repo} />
      ))}
    </Container>
  )
}

export default UserReposList

const Container = styled.div``

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  color: ${({ theme }) => theme.color.text.body};
  margin-bottom: 2rem;
`
