import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button, Dots } from 'styles'
import theme from 'theme/theme'

const UserNotFound = ({ username }) => {
  const history = useHistory()

  const onBack = () => {
    history.push(`/`)
  }

  return (
    <Container>
      <Content>
        <Title>
          {username}
          <br />
          <Grey>doesn't exist</Grey>
        </Title>

        <BackButton onClick={onBack}>Back to home</BackButton>

        <BackgroundSquare />
        <FirstDots />
        <SecondDots columns={8} rows={4} color={theme.color.text.label} />
        <WideRectangle />
      </Content>
    </Container>
  )
}

export default UserNotFound

const Container = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 55rem;
  position: relative;
  padding-top: 10rem;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  line-height: 1.2;
  color: ${({ theme }) => theme.color.text.title};
  margin-bottom: 4rem;
`

const Grey = styled.span`
  color: ${({ theme }) => theme.color.text.label};
`

const BackgroundSquare = styled.div`
  position: absolute;
  width: 45rem;
  height: 45rem;
  background: #f8f8f8;
  transform: rotate(60deg);
  top: 4rem;
  z-index: -1;
`

const FirstDots = styled(Dots)`
  position: absolute;
  top: 42rem;
  left: 2rem;
  z-index: -2;
`

const SecondDots = styled(Dots)`
  position: absolute;
  top: 0;
  right: 15rem;
`

const WideRectangle = styled.div`
  position: absolute;
  top: 56rem;
  right: 12rem;
  width: 18rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.color.text.body};
  box-shadow: -10px 10px 20px rgb(0, 0, 0, 0.4);
`

const BackButton = styled(Button)`
  width: 22rem;
  height: 4.4rem;
`
