import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ArrowRight, Search } from 'react-feather'
import { Button, Dots, Input, Loader } from 'styles'
import theme from 'theme/theme'
import hooks from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { userThunks } from 'state/ducks/userDuck'

const LandingPage = () => {
  const dispatch = useDispatch()
  const loading = useSelector(({ user }) => user.loading)
  const [error, showError, hideError] = hooks.useTemporaryMessage()
  const [username, setUsername] = useState('')

  const onInputChange = ({ target: { value } }) => {
    setUsername(value)

    if (!value) {
      hideError()
    }
  }

  const onEnterPressed = ({ key }) => {
    if (username.length && key === 'Enter') {
      search()
    }
  }

  const search = async () => {
    try {
      hideError()
      await dispatch(userThunks.getUserProfileAndRepos(username.trim()))
    } catch (error) {
      showError(error.message)
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          See
          <br />
          the
          <br />
          <Grey>work of</Grey>
        </Title>

        <FormContainer>
          <WideInput
            value={username}
            onChange={onInputChange}
            onKeyDown={onEnterPressed}
            leftIcon={<Search />}
            placeholder='Github username...'
          />

          <SearchButton onClick={search} disabled={loading || !username.length}>
            {!loading ? <ArrowRight /> : <Loader />}
          </SearchButton>
        </FormContainer>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <BackgroundSquare />
        <FirstDots />
        <SecondDots columns={8} rows={4} color={theme.color.text.label} />
        <WideRectangle />
      </Content>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  width: 100%;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 55rem;
  position: relative;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.grande};
  line-height: 1;
  color: ${({ theme }) => theme.color.text.title};
  margin-bottom: 2rem;
`

const Grey = styled.span`
  color: ${({ theme }) => theme.color.text.label};
`

const FormContainer = styled.div`
  display: flex;
`

const WideInput = styled(Input)`
  flex: 1;
  margin-right: 2rem;
`

const SearchButton = styled(Button)`
  width: 12rem;
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

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.body};
  margin-top: 3rem;
  margin-left: 2rem;
`
