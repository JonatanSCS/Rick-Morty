// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

class Home extends BaseComponent {
  render() {
    return (
      <AppContainer>
        <section className={`${styles.Characters} ${styles.Section}`} />
        <section className={`${styles.Locations} ${styles.Section}`} />
        <section className={`${styles.Episodes} ${styles.Section}`} />
      </AppContainer>
    )
  }
}

export default withAlert(Home)
