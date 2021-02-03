import React, { useMemo } from 'react'
import styled from 'styled-components/macro'
import { Button } from 'styles'
import { CONSTANTS } from 'utils/Constants'
import Repo from './Repo'

const generateConsecutiveNumberArray = (limit) => {
  return [...Array(limit).keys()].map((value) => value + 1)
}

const usePageData = (reposCount) => {
  const numberOfPages = useMemo(
    () => Math.floor(reposCount / CONSTANTS.PAGE_SIZE),
    [reposCount]
  )

  const pages = useMemo(() => generateConsecutiveNumberArray(numberOfPages), [
    numberOfPages,
  ])

  return { numberOfPages, pages }
}

const UserReposList = ({ publicReposCount, repos }) => {
  const { numberOfPages, pages } = usePageData(publicReposCount)

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
