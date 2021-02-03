import React, { useMemo } from 'react'
import styled from 'styled-components/macro'
import { Button } from 'styles'
import Repo from './Repo'

const generateConsecutiveNumberArray = (limit) => {
  return [...Array(limit).keys()].map((value) => value + 1)
}

const UserReposList = ({ activePage, numberOfPages, goToPage, repos }) => {
  const pages = useMemo(() => generateConsecutiveNumberArray(numberOfPages), [
    numberOfPages,
  ])

  const isFirstPageActive = activePage === 1
  const isLastPageActive = activePage === numberOfPages

  const _goToPage = (page) => () => {
    if (page === activePage) {
      window.scrollTo(0, 0)
    }

    goToPage(page)
  }

  if (!repos.length) {
    return null
  }

  return (
    <Container>
      <Title>Repos</Title>

      {repos.map((repo, index) => {
        const orderNumber = activePage * 10 - 10 + index
        return <Repo key={repo.id} orderNumber={orderNumber} repo={repo} />
      })}

      {numberOfPages > 1 && (
        <Footer>
          {!isFirstPageActive && (
            <div>
              <Button onClick={_goToPage(activePage - 1)}>Back</Button>
            </div>
          )}

          <PagesContainer>
            {pages.map((page) => (
              <Item
                onClick={_goToPage(page)}
                active={page === activePage}
                key={page}
              >
                {page}
              </Item>
            ))}
          </PagesContainer>

          {!isLastPageActive && (
            <div>
              <Button onClick={_goToPage(activePage + 1)}>Next</Button>
            </div>
          )}
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
  color: ${({ theme, active }) =>
    active ? theme.color.accent : theme.color.text.body};

  border-color: ${({ theme, active }) =>
    active ? theme.color.accent : theme.color.border};

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.medium};
    color: ${({ theme }) => theme.color.accent};
  }
`
