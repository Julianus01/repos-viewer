import React from 'react'
import { ArrowLeftCircle, Link } from 'react-feather'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'styles'

const UserProfileDetails = ({ profile }) => {
  const history = useHistory()

  const onReset = () => {
    history.push(`/`)
  }

  return (
    <Container>
      <BackButton onClick={onReset} />

      <Content>
        <Rectangle />

        <Avatar src={profile.avatarUrl} />

        <DetailsContainer>
          <Name>{profile.name}</Name>
          <RepositoriesCount>
            {profile.publicReposCount} respositories
          </RepositoriesCount>
        </DetailsContainer>

        <ActionsContainer>
          <Button>
            <Link size={18} />
          </Button>
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
  background: #f8f8f8;
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
  background: #f8f8f8;
  transform: rotate(60deg);
  top: 0rem;
  left: 4rem;
  z-index: -1;
`