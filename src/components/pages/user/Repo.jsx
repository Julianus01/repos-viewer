import React from 'react'
import styled from 'styled-components/macro'

const Repo = ({ number, repo }) => {
  const viewRepo = () => {
    window.open(repo.htmlUrl, '_blank')
  }

  return (
    <RepoContainer onClick={viewRepo}>
      <RepoName>
        {number + 1} {repo.name}
      </RepoName>
    </RepoContainer>
  )
}

export default Repo

const RepoContainer = styled.div`
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.color.hover};
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
