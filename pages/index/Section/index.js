// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

export default class Section extends BaseComponent {
  render() {
    return (
      <section className={`${styles.Characters} ${styles.Section}`}>
        <div className={`${styles.Content}`}>{this.props.children}</div>
      </section>
    )
  }
}
