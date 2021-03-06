import React from 'react'
import { ArrowLeftCircle, Link } from 'react-feather'
import styled from 'styled-components/macro'
import { ButtonLink } from 'styles'

const UserProfileDetails = ({ profile }) => {
  const displayName = profile.name ? profile.name : profile.username

  return (
    <Container>
      <a id='reset-link' href='/'>
        <BackButton />
      </a>

      <Content>
        <Rectangle />

        <Avatar src={profile.avatarUrl} />

        <DetailsContainer>
          <Name>{displayName}</Name>

          <RepositoriesCount>
            {profile.publicReposCount
              ? `${profile.publicReposCount} respositories`
              : 'No public repositories'}
          </RepositoriesCount>
        </DetailsContainer>

        <ActionsContainer>
          <ButtonLink
            id='profile-link'
            target='_blank'
            href={profile.htmlUrl}
            rightIcon={<Link size={16} />}
          >
            View profile
          </ButtonLink>
        </ActionsContainer>
      </Content>
    </Container>
  )
}

export default UserProfileDetails

const Container = styled.div``

const BackButton = styled(ArrowLeftCircle).attrs({ size: 32 })`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.color.text.body};
  transition: transform 0.15s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`

const Content = styled.div`
  display: flex;
  position: relative;
`

const Avatar = styled.img`
  width: 12rem;
  height: 12rem;
  background: ${({ theme }) => theme.color.hover};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  object-fit: cover;
  margin-right: 4rem;
`

const DetailsContainer = styled.div`
  flex: 1;
`

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.text.body};
`

const RepositoriesCount = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  color: ${({ theme }) => theme.color.text.label};
`

const ActionsContainer = styled.div`
  /* display: flex; */
`

const Rectangle = styled.div`
  position: absolute;
  width: 15rem;
  height: 15rem;
  background: ${({ theme }) => theme.color.hover};
  transform: rotate(60deg);
  top: 0rem;
  left: 4rem;
  z-index: -1;
`
