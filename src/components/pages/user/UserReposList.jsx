import React, { useMemo } from 'react'
import styled from 'styled-components/macro'
import { Button } from 'styles'

const PAGE_SIZE = 10

const generateConsecutiveNumberArray = (limit) => {
  return [...Array(limit).keys()].map((value) => value + 1)
}

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
  transition: box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out;
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

const UserReposList = ({ publicReposCount, repos }) => {
  console.log(publicReposCount)

  const numberOfPages = useMemo(
    () => Math.floor(publicReposCount / PAGE_SIZE),
    [publicReposCount]
  )

  const pages = generateConsecutiveNumberArray(numberOfPages)

  return (
    <Container>
      <Title>Repos</Title>

      {repos.map((repo, index) => (
        <Repo key={repo.id} index={index} repo={repo} />
      ))}

      {numberOfPages > 1 && (
        <Footer>
          <div>
            <Button>Back</Button>
          </div>

          <PagesContainer>
            {pages.map((page) => (
              <Item key={page}>{page}</Item>
            ))}
          </PagesContainer>

          <div>
            <Button>Next</Button>
          </div>
        </Footer>
      )}
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

const Footer = styled.div`
  display: flex;
`

const PagesContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  flex: 1;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-auto-rows: 40px;
  margin: 0 2rem;
`

const Item = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.1s ease-in-out, color 0.1s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.body};

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.medium};
    color: ${({ theme }) => theme.color.accent};
  }
`
