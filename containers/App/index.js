// Dependencies
import React from 'react'

// Components
import Header from './Header'

// Styles
import styles from './styles.scss'

export default props => (
  <div className={styles.Container}>
    <Header />
    <div className={styles.Content}>{props.children}</div>
  </div>
)
