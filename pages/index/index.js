// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import Characters from './components/Characters'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

class Home extends BaseComponent {
  render() {
    return (
      <AppContainer>
        <Characters />
        <section className={`${styles.Locations} ${styles.Section}`} />
        <section className={`${styles.Episodes} ${styles.Section}`} />
      </AppContainer>
    )
  }
}

export default withAlert(Home)
