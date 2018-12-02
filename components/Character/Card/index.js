// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Link from 'next/link'

// Styles
import styles from './styles.scss'

class Card extends BaseComponent {
  render() {
    const { name, image, id } = this.props
    return (
      <Link href={`/characters/${id}`}>
        <div className={styles.Card}>
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
      </Link>
    )
  }
}

export default Card
