import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro'
import theme from './theme/theme'
import LandingPage from './components/pages/LandingPage'

ReactDOM.render(
  <React.StrictMode>
    <StyledThemeProvider theme={theme}>
      <LandingPage />
    </StyledThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()