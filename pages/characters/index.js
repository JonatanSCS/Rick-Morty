// Dependencies
import React from 'react'

// Containers
import AppContainer from 'containers/App'
import { withAlert } from 'react-alert'

// Components
import InfinitList from 'components/Lists/Infinity'
import CharacterCard from 'components/Character/Card'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Services
import { fetchCharactersByPage } from 'services/characters'

class CharacterPage extends BaseComponent {
  _renderCharacter(character) {
    return <CharacterCard key={character.id + character.name} {...character} />
  }

  render() {
    return (
      <AppContainer>
        <InfinitList
          service={fetchCharactersByPage}
          label="Characters"
          height="900px"
          renderItem={this._renderCharacter}
        />
      </AppContainer>
    )
  }
}

export default withAlert(CharacterPage)
