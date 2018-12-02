// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import CharacterCard from 'components/Character/Card'

// Services
import { fetchMultipleCharacters } from 'services/characters'

// Styles
import styles from './styles.scss'

export default class Other extends BaseComponent {
  constructor() {
    super()

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetchMultipleCharacters(6).then(({ data }) => {
      this.setState({
        characters: data
      })
    })
  }

  _renderCharacter(character) {
    console.log(character)
    return <CharacterCard key={character.id + character.name} {...character} />
  }

  render() {
    return (
      <div className={styles.List}>
        {this.state.characters.map(this._renderCharacter)}
      </div>
    )
  }
}
