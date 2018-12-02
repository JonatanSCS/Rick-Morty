// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Utils
import BaseComponent from 'utils/BaseComponent'

class LocationPage extends BaseComponent {
  render() {
    return <AppContainer>Holi</AppContainer>
  }
}

export default withAlert(LocationPage)
