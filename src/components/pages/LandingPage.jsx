import React from 'react'
import styled from 'styled-components/macro'
import { ArrowRight, Search } from 'react-feather'
import { Button, Dots, Input } from '../../styles'
import theme from '../../theme/theme'

const LandingPage = () => {
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
          <WideInput leftIcon={<Search />} placeholder='Github username...' />
          <SearchButton>
            <ArrowRight />
          </SearchButton>
        </FormContainer>

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
  bottom: -20rem;
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
  bottom: -17rem;
  right: 12rem;
  width: 18rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.color.text.body};
  box-shadow: -10px 10px 20px rgb(0, 0, 0, 0.4);
`
