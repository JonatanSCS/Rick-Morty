// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Utils
import BaseComponent from 'utils/BaseComponent'

class CharacterPage extends BaseComponent {
  render() {
    return (
      <AppContainer>
        <h1>Characters: </h1>
        <p>List of characters</p>
      </AppContainer>
    )
  }
}

export default withAlert(CharacterPage)
