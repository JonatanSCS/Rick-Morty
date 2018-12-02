// Dependencies
import React from 'react'
import { createStore } from 'redux'
import detectBrowserLanguage from 'detect-browser-language'

// Components
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// Utils
import withRedux from 'next-redux-wrapper'

// Styles
import 'styles/normalize.scss'

// Redux
import reducer from 'reducers'

// Intenalization
import 'i18n'
import i18next from 'i18n'

const makeStore = initialState => {
  return createStore(reducer(), initialState)
}

class RickMortyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    i18next.changeLanguage(detectBrowserLanguage())
  }

  render() {
    const { Component, pageProps, store } = this.props
    const options = {
      position: 'bottom center',
      timeout: 4000,
      offset: '30px',
      transition: 'scale'
    }

    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </AlertProvider>
      </Provider>
    )
  }
}

export default withRedux(makeStore)(RickMortyApp)
