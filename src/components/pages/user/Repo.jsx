import React from 'react'
import { GitBranch, Star } from 'react-feather'
import styled from 'styled-components/macro'

const kFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num)

const Repo = ({ orderNumber, repo }) => {
  const viewRepo = () => {
    window.open(repo.htmlUrl, '_blank')
  }

  return (
    <RepoContainer onClick={viewRepo}>
      <RepoName>
        {orderNumber + 1} {repo.name}
      </RepoName>

      <DetailsContainer>
        <InfoContainer>
          <Text>{kFormatter(repo.stargazers_count)}</Text>
          <StyledStar size={16} />
        </InfoContainer>

        <InfoContainer>
          <Text>{kFormatter(repo.forks_count)}</Text>
          <StyledGitBranch size={16} />
        </InfoContainer>
      </DetailsContainer>
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
  display: flex;

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
  flex: 1;
`

const DetailsContainer = styled.div`
  display: flex;
`

const InfoContainer = styled.div`
  display: flex;
  min-width: 5rem;
  justify-content: flex-end;

  :not(:last-child) {
    margin-right: 2rem;
  }
`

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.label};
  color: ${({ theme }) => theme.color.text.body};
  margin-right: 0.5rem;
`

const StyledStar = styled(Star).attrs({ size: 16 })`
  color: ${({ theme }) => theme.color.yellow};
`

const StyledGitBranch = styled(GitBranch).attrs({ size: 16 })`
  color: ${({ theme }) => theme.color.green};
`
