// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

class Card extends BaseComponent {
  render() {
    const { name } = this.props
    const number = Math.floor(Math.random() * 4) + 1
    return (
      <div className={styles.Card}>
        <img src={`/static/episodes/episode-${number}.png`} alt={name} />
        <p>{name}</p>
      </div>
    )
  }
}

export default Card
