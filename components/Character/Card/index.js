// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

class Card extends BaseComponent {
  render() {
    const { name, image } = this.props
    return (
      <div className={styles.Card}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    )
  }
}

export default Card
