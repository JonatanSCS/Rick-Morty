import React from 'react'
import App, { Container } from 'next/app'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    const options = {
      position: 'bottom center',
      timeout: 4000,
      offset: '30px',
      transition: 'scale'
    }

    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </AlertProvider>
    )
  }
}
