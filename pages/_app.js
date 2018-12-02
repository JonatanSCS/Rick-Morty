import React from 'react'
import App, { Container } from 'next/app'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import 'styles/normalize.scss'
import withRedux from 'next-redux-wrapper'

import {applyMiddleware, createStore} from 'redux'
import detectBrowserLanguage from 'detect-browser-language'

import reducer from 'reducers'

// Intenalization
import 'i18n'
import i18next from 'i18n'

const makeStore = (initialState, options) => {
  return createStore(reducer(), initialState)
}

class RickMortyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    i18next.changeLanguage(detectBrowserLanguage())
  }

  render () {
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
