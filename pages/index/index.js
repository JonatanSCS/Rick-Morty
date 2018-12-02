// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

class Home extends BaseComponent {
  render() {
    return (
      <AppContainer>
        <h1>My Home</h1>
      </AppContainer>
    )
  }
}

export default withAlert(Home)
