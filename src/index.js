import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro'
import theme from 'theme/theme'
import 'utils/applyAxiosMiddlewares'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'state/store'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'

const RootHTML = (
  <React.StrictMode>
    <ReduxProvider store={store}>
      <StyledThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </StyledThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
)

ReactDOM.render(RootHTML, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
