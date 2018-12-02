// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

export default class Card extends BaseComponent {
  render() {
    const { name, type, dimension } = this.props
    const number = Math.floor(Math.random() * 4) + 1
    return (
      <div className={styles.Location}>
        <img src={`/static/locations/planet-${number}.jpg`} alt={name} />
        <div className={styles.Data}>
          <p>
            Nombre: <span>{name}</span>
          </p>
          <p>
            Tipo: <span>{type}</span>
          </p>
          <p>
            Dimensión: <span>{dimension}</span>
          </p>
        </div>
      </div>
    )
  }
}
